"use client";

import {
    ArrowLeft,
    ArrowRight,
    Check,
    Clock3,
    UserRound,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

const services = [
    { name: "Hair Styling", duration: "90 min", price: "From LKR 4,500" },
    { name: "Skin Therapy", duration: "75 min", price: "From LKR 6,000" },
    { name: "Nail Atelier", duration: "60 min", price: "From LKR 3,500" },
    { name: "Bridal & Editorial", duration: "120 min", price: "From LKR 15,000" },
];

const artists = [
    { name: "Amaya Silva", role: "Creative Hair Director" },
    { name: "Maya Perera", role: "Skin & Beauty Artist" },
    { name: "Elena Jay", role: "Bridal & Editorial Artist" },
    { name: "First Available", role: "Best available artist" },
];

const times = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

const stepLabels = [
    "Service",
    "Artist",
    "Date & Time",
    "Your Details",
];

export default function BookingFlow() {
    const [step, setStep] = useState(1);

    const [service, setService] = useState("");
    const [artist, setArtist] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");

    const [submitted, setSubmitted] = useState(false);

    const selectedService = useMemo(
        () => services.find((item) => item.name === service),
        [service]
    );

    const canContinue =
        step === 1
            ? Boolean(service)
            : step === 2
                ? Boolean(artist)
                : step === 3
                    ? Boolean(date && time)
                    : Boolean(name.trim() && phone.trim() && email.trim());

    function next() {
        if (!canContinue) return;

        if (step < 4) {
            setStep((current) => current + 1);
            return;
        }

        setSubmitted(true);
    }

    function back() {
        if (step > 1) {
            setStep((current) => current - 1);
        }
    }

    const minDate = new Date().toISOString().split("T")[0];

    if (submitted) {
        return (
            <section className="bg-[#ebe4d8] py-24 md:py-32">
                <div className="container-main">
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="mx-auto max-w-[900px] border border-black/15 bg-[#f4f0e8] p-8 md:p-14"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#181713] text-[#f4f0e8]">
                            <Check size={20} strokeWidth={1.3} />
                        </div>

                        <p className="mt-10 text-[9px] uppercase tracking-[0.24em] text-[#8f7353]">
                            Appointment request received
                        </p>

                        <h2 className="serif mt-5 max-w-[700px] text-5xl leading-[0.9] tracking-[-0.045em] md:text-7xl">
                            Your appointment
                            <span className="italic text-[#967653]"> request is ready.</span>
                        </h2>

                        <p className="mt-8 max-w-[540px] text-[12px] leading-6 text-[#666057]">
                            Thank you, {name}. This is a concept booking experience, so no
                            real appointment has been created. Your selected details are shown
                            below.
                        </p>

                        <div className="mt-12 grid gap-6 border-y border-black/15 py-8 sm:grid-cols-2">
                            <SummaryItem label="Service" value={service} />
                            <SummaryItem label="Artist" value={artist} />
                            <SummaryItem label="Date" value={date} />
                            <SummaryItem label="Time" value={time} />
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                setSubmitted(false);
                                setStep(1);
                            }}
                            className="mt-10 border border-[#181713] px-6 py-4 text-[9px] uppercase tracking-[0.2em] transition-colors hover:bg-[#181713] hover:text-[#f4f0e8]"
                        >
                            Start another booking
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#ebe4d8] py-24 md:py-32 lg:py-40">
            <div className="container-main">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                    {/* LEFT */}
                    <aside>
                        <div className="lg:sticky lg:top-32">
                            <p className="text-[9px] uppercase tracking-[0.24em] text-[#777166]">
                                02 / Appointment
                            </p>

                            <h2 className="serif mt-5 text-5xl leading-[0.9] tracking-[-0.045em] md:text-6xl">
                                Plan your
                                <span className="block italic text-[#967653]">
                                    appointment
                                </span>
                            </h2>

                            <div className="mt-12 border-t border-black/15">
                                {stepLabels.map((label, index) => {
                                    const number = index + 1;
                                    const active = step === number;
                                    const complete = step > number;

                                    return (
                                        <button
                                            key={label}
                                            type="button"
                                            onClick={() => {
                                                if (number < step) setStep(number);
                                            }}
                                            className="flex w-full items-center justify-between border-b border-black/15 py-5 text-left"
                                        >
                                            <div className="flex items-center gap-4">
                                                <span
                                                    className={`flex h-7 w-7 items-center justify-center rounded-full border text-[8px] ${complete
                                                        ? "border-[#181713] bg-[#181713] text-[#f4f0e8]"
                                                        : active
                                                            ? "border-[#967653] text-[#967653]"
                                                            : "border-black/15 text-black/30"
                                                        }`}
                                                >
                                                    {complete ? (
                                                        <Check size={11} strokeWidth={1.4} />
                                                    ) : (
                                                        `0${number}`
                                                    )}
                                                </span>

                                                <span
                                                    className={`text-[10px] uppercase tracking-[0.18em] ${active
                                                        ? "text-[#181713]"
                                                        : "text-[#777166]"
                                                        }`}
                                                >
                                                    {label}
                                                </span>
                                            </div>

                                            {active && (
                                                <span className="text-[8px] uppercase tracking-[0.2em] text-[#967653]">
                                                    Current
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* live summary */}
                            <div className="mt-10 border border-black/15 p-6">
                                <p className="text-[8px] uppercase tracking-[0.22em] text-[#777166]">
                                    Your selection
                                </p>

                                <div className="mt-6 space-y-5">
                                    <SummaryItem
                                        label="Service"
                                        value={service || "Not selected"}
                                    />

                                    <SummaryItem
                                        label="Artist"
                                        value={artist || "Not selected"}
                                    />

                                    <SummaryItem
                                        label="Date"
                                        value={date || "Not selected"}
                                    />

                                    <SummaryItem
                                        label="Time"
                                        value={time || "Not selected"}
                                    />
                                </div>

                                {selectedService && (
                                    <div className="mt-6 border-t border-black/15 pt-6">
                                        <div className="flex justify-between gap-4 text-[9px] uppercase tracking-[0.16em] text-[#777166]">
                                            <span>{selectedService.duration}</span>
                                            <span>{selectedService.price}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>

                    {/* RIGHT */}
                    <div>
                        <div className="mb-8 flex items-center justify-between border-b border-black/15 pb-5">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#777166]">
                                Step {String(step).padStart(2, "0")} / 04
                            </span>

                            <span className="serif text-xl italic text-[#967653]">
                                {stepLabels[step - 1]}
                            </span>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -16 }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                {step === 1 && (
                                    <StepShell
                                        eyebrow="Choose a Services"
                                        title="What brings you to Élanora?"
                                        description="Select the experience closest to what you have in mind. The details can be refined during consultation."
                                    >
                                        <div className="grid gap-3 sm:grid-cols-2">
                                            {services.map((item) => {
                                                const selected = service === item.name;

                                                return (
                                                    <button
                                                        key={item.name}
                                                        type="button"
                                                        onClick={() => setService(item.name)}
                                                        className={`group min-h-[190px] border p-6 text-left transition-all duration-300 ${selected
                                                            ? "border-[#181713] bg-[#181713] text-[#f4f0e8]"
                                                            : "border-black/15 bg-[#f4f0e8] hover:border-black/40"
                                                            }`}
                                                    >
                                                        <div className="flex justify-between">
                                                            <span
                                                                className={`text-[8px] uppercase tracking-[0.2em] ${selected
                                                                    ? "text-white/45"
                                                                    : "text-[#777166]"
                                                                    }`}
                                                            >
                                                                Service
                                                            </span>

                                                            <span
                                                                className={`flex h-7 w-7 items-center justify-center rounded-full border ${selected
                                                                    ? "border-white/30"
                                                                    : "border-black/15"
                                                                    }`}
                                                            >
                                                                {selected && (
                                                                    <Check size={11} strokeWidth={1.4} />
                                                                )}
                                                            </span>
                                                        </div>

                                                        <h3 className="serif mt-8 text-3xl tracking-[-0.03em]">
                                                            {item.name}
                                                        </h3>

                                                        <div
                                                            className={`mt-5 flex justify-between text-[8px] uppercase tracking-[0.16em] ${selected
                                                                ? "text-white/45"
                                                                : "text-[#777166]"
                                                                }`}
                                                        >
                                                            <span>{item.duration}</span>
                                                            <span>{item.price}</span>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </StepShell>
                                )}

                                {step === 2 && (
                                    <StepShell
                                        eyebrow="Choose an artist"
                                        title="Who would you like to create with?"
                                        description="Choose a preferred artist, or let us match you with the first available specialist."
                                    >
                                        <div className="border-t border-black/15">
                                            {artists.map((item, index) => {
                                                const selected = artist === item.name;

                                                return (
                                                    <button
                                                        key={item.name}
                                                        type="button"
                                                        onClick={() => setArtist(item.name)}
                                                        className="group flex w-full items-center justify-between border-b border-black/15 py-7 text-left"
                                                    >
                                                        <div className="flex items-center gap-5">
                                                            <span className="text-[8px] text-[#967653]">
                                                                0{index + 1}
                                                            </span>

                                                            <div>
                                                                <h3
                                                                    className={`serif text-3xl tracking-[-0.03em] transition-transform duration-300 ${selected ? "translate-x-2" : ""
                                                                        }`}
                                                                >
                                                                    {item.name}
                                                                </h3>

                                                                <p className="mt-1 text-[8px] uppercase tracking-[0.17em] text-[#777166]">
                                                                    {item.role}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <span
                                                            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${selected
                                                                ? "border-[#181713] bg-[#181713] text-[#f4f0e8]"
                                                                : "border-black/15"
                                                                }`}
                                                        >
                                                            {selected && (
                                                                <Check size={12} strokeWidth={1.4} />
                                                            )}
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </StepShell>
                                )}

                                {step === 3 && (
                                    <StepShell
                                        eyebrow="Choose a moment"
                                        title="When should we reserve your Appointment?"
                                        description="Select your preferred date and appointment time."
                                    >
                                        <div className="grid gap-10 md:grid-cols-2">
                                            <div>
                                                <label className="text-[9px] uppercase tracking-[0.18em] text-[#777166]">
                                                    Preferred date
                                                </label>

                                                <input
                                                    type="date"
                                                    min={minDate}
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                    className="mt-4 w-full border border-black/15 bg-[#f4f0e8] px-5 py-5 text-[13px] outline-none transition-colors focus:border-[#181713]"
                                                />
                                            </div>

                                            <div>
                                                <label className="text-[9px] uppercase tracking-[0.18em] text-[#777166]">
                                                    Available times
                                                </label>

                                                <div className="mt-4 grid grid-cols-2 gap-2">
                                                    {times.map((item) => (
                                                        <button
                                                            key={item}
                                                            type="button"
                                                            onClick={() => setTime(item)}
                                                            className={`flex items-center justify-center gap-2 border px-3 py-4 text-[9px] tracking-[0.14em] transition-colors ${time === item
                                                                ? "border-[#181713] bg-[#181713] text-[#f4f0e8]"
                                                                : "border-black/15 bg-[#f4f0e8] hover:border-black/40"
                                                                }`}
                                                        >
                                                            <Clock3 size={12} strokeWidth={1.2} />
                                                            {item}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </StepShell>
                                )}

                                {step === 4 && (
                                    <StepShell
                                        eyebrow="Final details"
                                        title="A few details before we begin."
                                        description="These details would normally be used to confirm and personalise your appointment."
                                    >
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <Field
                                                label="Full name"
                                                value={name}
                                                onChange={setName}
                                                placeholder="Your name"
                                            />

                                            <Field
                                                label="Phone"
                                                value={phone}
                                                onChange={setPhone}
                                                placeholder="+94..."
                                            />

                                            <div className="sm:col-span-2">
                                                <Field
                                                    label="Email"
                                                    value={email}
                                                    onChange={setEmail}
                                                    placeholder="you@example.com"
                                                    type="email"
                                                />
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label className="text-[9px] uppercase tracking-[0.18em] text-[#777166]">
                                                    Notes
                                                </label>

                                                <textarea
                                                    value={note}
                                                    onChange={(e) => setNote(e.target.value)}
                                                    rows={5}
                                                    placeholder="Tell us anything that would help us prepare..."
                                                    className="mt-3 w-full resize-none border border-black/15 bg-[#f4f0e8] px-5 py-4 text-[13px] outline-none transition-colors placeholder:text-black/25 focus:border-[#181713]"
                                                />
                                            </div>
                                        </div>
                                    </StepShell>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* controls */}
                        <div className="mt-12 flex items-center justify-between border-t border-black/15 pt-7">
                            <button
                                type="button"
                                onClick={back}
                                disabled={step === 1}
                                className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] disabled:pointer-events-none disabled:opacity-20"
                            >
                                <ArrowLeft
                                    size={14}
                                    strokeWidth={1.2}
                                    className="transition-transform group-hover:-translate-x-1"
                                />

                                Back
                            </button>

                            <button
                                type="button"
                                disabled={!canContinue}
                                onClick={next}
                                className="group flex items-center gap-5 bg-[#181713] px-6 py-4 text-[#f4f0e8] transition-opacity disabled:pointer-events-none disabled:opacity-25"
                            >
                                <span className="text-[9px] uppercase tracking-[0.2em]">
                                    {step === 4
                                        ? "Request appointment"
                                        : "Continue"}
                                </span>

                                <ArrowRight
                                    size={14}
                                    strokeWidth={1.2}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </button>
                        </div>

                        <p className="mt-5 text-right text-[8px] uppercase tracking-[0.16em] text-[#777166]">
                            Concept booking experience / no payment required
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepShell({
    eyebrow,
    title,
    description,
    children,
}: {
    eyebrow: string;
    title: string;
    description: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#967653]">
                {eyebrow}
            </p>

            <h3 className="serif mt-5 max-w-[760px] text-4xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
                {title}
            </h3>

            <p className="mt-6 max-w-[560px] text-[12px] leading-6 text-[#666057]">
                {description}
            </p>

            <div className="mt-12">{children}</div>
        </div>
    );
}

function SummaryItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div>
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#777166]">
                {label}
            </p>

            <p className="serif mt-1 text-xl tracking-[-0.02em]">
                {value}
            </p>
        </div>
    );
}

function Field({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: string;
}) {
    return (
        <div>
            <label className="text-[9px] uppercase tracking-[0.18em] text-[#777166]">
                {label}
            </label>

            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="mt-3 w-full border border-black/15 bg-[#f4f0e8] px-5 py-4 text-[13px] outline-none transition-colors placeholder:text-black/25 focus:border-[#181713]"
            />
        </div>
    );
}