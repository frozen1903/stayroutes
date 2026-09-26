"use client"

import { useEffect, useState } from "react"
import { site, whatsappUrl } from "../lib/site"

const TRANSFER_TYPES = [
  { id: "arrival", label: "Airport → Hotel", message: "Airport → Hotel (Arrival)" },
  { id: "departure", label: "Hotel → Airport", message: "Hotel → Airport (Departure)" },
  { id: "round", label: "Round Trip", message: "Round Trip (Arrival + Departure)" },
]

const AIRPORTS = [
  "Istanbul Airport (IST)",
  "Sabiha Gökçen Airport (SAW)",
]

export const VEHICLES = {
  vito: { name: "VIP Mercedes Vito", short: "Vito", maxGuests: 6, maxLuggage: 6 },
  sprinter: { name: "VIP Mercedes Sprinter", short: "Sprinter", maxGuests: 12, maxLuggage: 16 },
}

const MAX_GUESTS = VEHICLES.sprinter.maxGuests

const initialForm = {
  type: "arrival",
  airport: "",
  date: "",
  time: "",
  flight: "",
  returnDate: "",
  returnTime: "",
  returnFlight: "",
  address: "",
  adults: 1,
  children: 0,
  childSeats: 0,
  luggage: 1,
  vehicle: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
}

function todayString() {
  const now = new Date()
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  return local.toISOString().slice(0, 10)
}

function formatDate(value) {
  if (!value) return ""
  const [y, m, d] = value.split("-").map(Number)
  return new Date(y, m - 1, d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

function suggestedVehicle(guests, luggage) {
  return guests <= VEHICLES.vito.maxGuests && luggage <= VEHICLES.vito.maxLuggage ? "vito" : "sprinter"
}

function validate(form, today) {
  const errors = {}
  const guests = form.adults + form.children
  const needsArrival = form.type !== "departure"

  if (!form.airport) errors.airport = "Please select an airport."

  if (!form.date) errors.date = "Please select a date."
  else if (form.date < today) errors.date = "Date cannot be in the past."

  if (!form.time) errors.time = "Please enter a time."

  if (needsArrival && !form.flight.trim()) errors.flight = "Flight number helps us track delays."

  if (form.type === "round") {
    if (!form.returnDate) errors.returnDate = "Please select a return date."
    else if (form.date && form.returnDate < form.date) errors.returnDate = "Return must be after arrival."
    if (!form.returnTime) errors.returnTime = "Please enter a pickup time."
  }

  if (!form.address.trim()) errors.address = "Please enter your hotel or address."

  if (guests > MAX_GUESTS) errors.guests = `For groups over ${MAX_GUESTS} guests please contact us directly.`

  if (form.vehicle === "vito" && (guests > VEHICLES.vito.maxGuests || form.luggage > VEHICLES.vito.maxLuggage)) {
    errors.vehicle = `Vito fits up to ${VEHICLES.vito.maxGuests} guests and ${VEHICLES.vito.maxLuggage} suitcases. Please choose Sprinter.`
  }

  if (!form.name.trim()) errors.name = "Please enter the lead passenger name."

  if (form.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a phone number with country code."

  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Please enter a valid email."

  return errors
}

function buildMessage(form) {
  const type = TRANSFER_TYPES.find((t) => t.id === form.type)
  const guests = form.adults + form.children
  const vehicleKey = form.vehicle || suggestedVehicle(guests, form.luggage)
  const vehicle = VEHICLES[vehicleKey].name + (form.vehicle ? "" : " (suggested)")
  const firstLeg = form.type === "departure" ? "Pickup" : "Arrival"

  const lines = [
    `Hello ${site.name},`,
    "",
    "Transfer Request",
    "",
    `Type: ${type.message}`,
    `Airport: ${form.airport}`,
    `${firstLeg}: ${formatDate(form.date)} at ${form.time}`,
    form.flight.trim() ? `Flight: ${form.flight.trim().toUpperCase()}` : null,
    form.type === "round" ? `Return pickup: ${formatDate(form.returnDate)} at ${form.returnTime}` : null,
    form.type === "round" && form.returnFlight.trim() ? `Return flight: ${form.returnFlight.trim().toUpperCase()}` : null,
    `Hotel / address: ${form.address.trim()}`,
    "",
    `Passengers: ${form.adults} adult${form.adults > 1 ? "s" : ""}${form.children ? `, ${form.children} child${form.children > 1 ? "ren" : ""}` : ""}`,
    form.childSeats ? `Child seats: ${form.childSeats}` : null,
    `Luggage: ${form.luggage} suitcase${form.luggage === 1 ? "" : "s"}`,
    `Vehicle: ${vehicle}`,
    "",
    `Lead passenger: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    form.email.trim() ? `Email: ${form.email.trim()}` : null,
    form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
    "",
    "Please provide availability and pricing.",
  ]

  return lines.filter((line) => line !== null).join("\n")
}

const inputClass = (error) =>
  `w-full bg-black/30 border rounded-2xl px-5 py-4 [color-scheme:dark] ${error ? "border-red-400" : "border-white/10"}`

function Field({ label, error, optional, children }) {
  return (
    <div>
      <label className="text-sm text-gray-400 block mb-3">
        {label}
        {optional && <span className="text-gray-600"> (optional)</span>}
      </label>

      {children}

      {error && (
        <p className="text-red-400 text-sm mt-2">{error}</p>
      )}
    </div>
  )
}

function range(from, to) {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i)
}

export default function TransferForm() {

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [today, setToday] = useState("")

  useEffect(() => {
    setToday(todayString())

    // Filo bölümündeki "Book This Vehicle" linki ?vehicle=vito|sprinter ile gelir
    const vehicle = new URLSearchParams(window.location.search).get("vehicle")
    if (VEHICLES[vehicle]) {
      setForm((f) => ({ ...f, vehicle }))
    }
  }, [])

  const update = (key, value) => {
    const next = { ...form, [key]: value }
    if (next.childSeats > next.children) next.childSeats = next.children
    setForm(next)
    if (submitted) setErrors(validate(next, today || todayString()))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    const found = validate(form, today || todayString())
    setErrors(found)

    if (Object.keys(found).length > 0) {
      const first = document.querySelector("[data-error='true']")
      first?.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }

    window.location.href = whatsappUrl(buildMessage(form))
  }

  const guests = form.adults + form.children
  const suggestion = VEHICLES[suggestedVehicle(guests, form.luggage)].short
  const isDeparture = form.type === "departure"

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6">

      {/* Transfer Type */}

      <div>

        <p className="text-sm text-gray-400 mb-3">
          Transfer Type
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

          {TRANSFER_TYPES.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => update("type", type.id)}
              aria-pressed={form.type === type.id}
              className={`rounded-2xl px-5 py-4 font-bold border transition-all ${
                form.type === type.id
                  ? "bg-yellow-500 text-black border-yellow-500"
                  : "bg-black/30 border-white/10 hover:bg-white/10"
              }`}
            >
              {type.label}
            </button>
          ))}

        </div>

      </div>

      {/* Airport & Flight */}

      <div className="grid md:grid-cols-2 gap-6" data-error={!!(errors.airport || errors.flight)}>

        <Field label="Airport" error={errors.airport}>
          <select
            value={form.airport}
            onChange={(e) => update("airport", e.target.value)}
            className={inputClass(errors.airport)}
          >
            <option value="">Select Airport</option>
            {AIRPORTS.map((airport) => (
              <option key={airport}>{airport}</option>
            ))}
          </select>
        </Field>

        <Field
          label={isDeparture ? "Departure Flight Number" : "Arrival Flight Number"}
          error={errors.flight}
          optional={isDeparture}
        >
          <input
            type="text"
            placeholder="e.g. TK1980"
            value={form.flight}
            onChange={(e) => update("flight", e.target.value)}
            className={`${inputClass(errors.flight)} uppercase placeholder:normal-case`}
          />
        </Field>

      </div>

      {/* Date & Time */}

      <div className="grid md:grid-cols-2 gap-6" data-error={!!(errors.date || errors.time)}>

        <Field label={isDeparture ? "Pickup Date" : "Arrival Date"} error={errors.date}>
          <input
            type="date"
            min={today || undefined}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputClass(errors.date)}
          />
        </Field>

        <Field label={isDeparture ? "Pickup Time (from hotel)" : "Flight Arrival Time"} error={errors.time}>
          <input
            type="time"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className={inputClass(errors.time)}
          />
        </Field>

      </div>

      {/* Return Leg */}

      {form.type === "round" && (

        <div className="bg-black/20 border border-white/10 rounded-[24px] md:rounded-[32px] p-4 md:p-6 grid gap-6" data-error={!!(errors.returnDate || errors.returnTime)}>

          <h3 className="text-2xl font-bold">
            Return Transfer
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            <Field label="Pickup Date" error={errors.returnDate}>
              <input
                type="date"
                min={form.date || today || undefined}
                value={form.returnDate}
                onChange={(e) => update("returnDate", e.target.value)}
                className={inputClass(errors.returnDate)}
              />
            </Field>

            <Field label="Pickup Time (from hotel)" error={errors.returnTime}>
              <input
                type="time"
                value={form.returnTime}
                onChange={(e) => update("returnTime", e.target.value)}
                className={inputClass(errors.returnTime)}
              />
            </Field>

            <Field label="Departure Flight" optional>
              <input
                type="text"
                placeholder="e.g. TK1979"
                value={form.returnFlight}
                onChange={(e) => update("returnFlight", e.target.value)}
                className={`${inputClass()} uppercase placeholder:normal-case`}
              />
            </Field>

          </div>

        </div>

      )}

      {/* Address */}

      <div data-error={!!errors.address}>
        <Field label="Hotel Name / Address" error={errors.address}>
          <input
            type="text"
            placeholder="e.g. Hotel name, Sultanahmet"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            className={inputClass(errors.address)}
          />
        </Field>
      </div>

      {/* Guests & Luggage */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-error={!!errors.guests}>

        <Field label="Adults">
          <select
            value={form.adults}
            onChange={(e) => update("adults", Number(e.target.value))}
            className={inputClass(errors.guests)}
          >
            {range(1, MAX_GUESTS).map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </Field>

        <Field label="Children">
          <select
            value={form.children}
            onChange={(e) => update("children", Number(e.target.value))}
            className={inputClass(errors.guests)}
          >
            {range(0, MAX_GUESTS - 1).map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </Field>

        <Field label="Child Seats">
          <select
            value={form.childSeats}
            onChange={(e) => update("childSeats", Number(e.target.value))}
            disabled={form.children === 0}
            className={`${inputClass()} disabled:opacity-40`}
          >
            {range(0, form.children).map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </Field>

        <Field label="Suitcases">
          <select
            value={form.luggage}
            onChange={(e) => update("luggage", Number(e.target.value))}
            className={inputClass()}
          >
            {range(0, VEHICLES.sprinter.maxLuggage).map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </Field>

      </div>

      {errors.guests && (
        <p className="text-red-400 text-sm -mt-3">{errors.guests}</p>
      )}

      {/* Vehicle */}

      <div data-error={!!errors.vehicle}>
        <Field label="Vehicle" error={errors.vehicle}>
          <select
            value={form.vehicle}
            onChange={(e) => update("vehicle", e.target.value)}
            className={inputClass(errors.vehicle)}
          >
            <option value="">Recommended: {suggestion}</option>
            {Object.entries(VEHICLES).map(([key, vehicle]) => (
              <option key={key} value={key}>
                {vehicle.short} (up to {vehicle.maxGuests} guests)
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Contact */}

      <div className="bg-black/20 border border-white/10 rounded-[24px] md:rounded-[32px] p-4 md:p-6 grid gap-6" data-error={!!(errors.name || errors.phone || errors.email)}>

        <h3 className="text-2xl font-bold">
          Lead Passenger
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <Field label="Full Name" error={errors.name}>
            <input
              type="text"
              autoComplete="name"
              placeholder="Name Surname"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass(errors.name)}
            />
          </Field>

          <Field label="Phone (with country code)" error={errors.phone}>
            <input
              type="tel"
              autoComplete="tel"
              placeholder="+44 7700 900000"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={inputClass(errors.phone)}
            />
          </Field>

        </div>

        <Field label="Email" error={errors.email} optional>
          <input
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass(errors.email)}
          />
        </Field>

      </div>

      {/* Notes */}

      <Field label="Notes" optional>
        <textarea
          rows={3}
          placeholder="Other passenger names, special requests, meet & greet sign name..."
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          className={`${inputClass()} resize-y`}
        />
      </Field>

      {submitted && Object.keys(errors).length > 0 && (
        <p className="text-red-400 text-center">
          Please check the highlighted fields.
        </p>
      )}

      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black font-bold rounded-2xl py-5 text-center text-lg mt-2"
      >
        Continue via WhatsApp
      </button>

      <p className="text-gray-500 text-sm text-center -mt-2">
        Your request opens in WhatsApp. Nothing is sent until you press send.
      </p>

    </form>
  )
}
