"use client";

import { AnimatePresence, motion } from "motion/react";
import {
    ArrowLeft,
    ArrowRight,
    CalendarDays,
    Check,
} from "lucide-react";
import { FormEvent, useState } from "react";

const services = [
    {
        name: "Hair Rituals",
        description: "Cut, colour & restorative care",
        price: "From LKR 4,500",
    },
    {
        name: "Skin Therapy",
        description: "Facials & personalised skin rituals",
        price: "From LKR 6,000",
    },
    {
        name: "Nail Atelier",
        description: "Refined manicure & nail artistry",
        price: "From LKR 3,500",
    },
    {
        name: "Bridal & Editorial",
        description: "Beauty direction for meaningful occasions",
        price: "By consultation",
    },
];

const artists = [
    {
        name: "Amaya Silva",
        role: "Creative Hair Director",
    },
    {
        name: "Maya Perera",
        role: "Skin & Beauty Artist",
    },
    {
        name: "Elena Jay",
        role: "Bridal & Editorial Artist",
    },
    {
        name: "No preference",
        role: "Choose the best available artist",
    },
];

const times = [
    "09:00",
    "10:30",
    "12:00",
    "13:30",
    "15:00",
    "16:30",
    "18:00",
];

export default function BookingFlow() {
    const [step, setStep] = useState(1);

    const [service, setService] = useState("");
    const [artist, setArtist] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [details, setDetails] = useState({
        name: "",
        email: "",
        phone: "",
        notes: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const canContinue =
        (step === 1 && service !== "") ||
        (step === 2 && artist !== "") ||
        (step === 3 && date !== "" && time !== "");

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!details.name || !details.email || !details.phone) {
            return;
        }

        setSubmitted(true);
    }

    if (submitted) {
        return (
            <section className="min-h-[75vh] bg-[#ebe4d8] py-24">
                <div className="container-main flex min-h-[55vh] items-center justify-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl text-center"
                    >
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-black/25">
                            <Check size={22} strokeWidth={1.2} />
                        </div>

                        <p className="eyebrow mt-8 text-[#777166]">
                            Request Received
                        </p>

                        <h2 className="serif mt-6 text-6xl tracking-[-0.045em] md:text-8xl">
                            See you
                            <span className="italic text-[#8a8173]"> soon.</span>
                        </h2>

                        <p className="mx-auto mt-8 max-w-md text-[13px] leading-6 text-[#696359]">
                            Thank you, {details.name}. Your appointment request for{" "}
                            {service} with {artist} has been received.
                        </p>

                        <div className="mx-auto mt-10 grid max-w-md grid-cols-2 border-y border-black/15 py-6 text-left">
                            <div>
                                <p className="text-[9px] uppercase tracking-[0.18em] text-[#777166]">
                                    Date
                                </p>
                                <p className="serif mt-2 text-xl">{date}</p>
                            </div>

                            <div>
                                <p className="text-[9px] uppercase tracking-[0.18em] text-[#777166]">
                                    Time
                                </p>
                                <p className="serif mt-2 text-xl">{time}</p>
                            </div>
                        </div>

                        <p className="mt-8 text-[10px] uppercase tracking-[0.18em] text-[#777166]">
                            Demo booking experience
                        </p>
                    </motion.div>

                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#ebe4d8] py-20 md:py-28">
            <div className="container-main">

                {/* Progress */}
                <div className="grid grid-cols-4 border-y border-black/15">
                    {["Service", "Artist", "Time", "Details"].map((label, index) => {
                        const number = index + 1;

                        return (
                            <div
                                key={label}
                                className={`border-r border-black/15 px-2 py-5 last:border-r-0 md:px-5 ${step === number ? "bg-[#181713] text-[#f4f0e8]" : ""
                                    }`}
                            >
                                <p
                                    className={`text-[8px] uppercase tracking-[0.12em] md:text-[9px] md:tracking-[0.18em] ${step === number
                                            ? "text-white/60"
                                            : "text-[#777166]"
                                        }`}
                                >
                                    0{number}
                                </p>

                                <p className="mt-1 hidden text-[11px] md:block">
                                    {label}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="grid gap-14 py-16 lg:grid-cols-[0.55fr_1.45fr]">

                    {/* Sidebar */}
                    <div>
                        <p className="eyebrow text-[#777166]">
                            Step 0{step}
                        </p>

                        <h2 className="serif mt-5 text-4xl tracking-[-0.035em]">
                            {step === 1 && "Choose a ritual"}
                            {step === 2 && "Choose your artist"}
                            {step === 3 && "Find your time"}
                            {step === 4 && "Your details"}
                        </h2>

                        <div className="mt-10 hidden max-w-xs border-t border-black/15 pt-6 text-[11px] leading-6 text-[#777166] lg:block">
                            {service && (
                                <p>
                                    Service
                                    <span className="block text-[#181713]">{service}</span>
                                </p>
                            )}

                            {artist && (
                                <p className="mt-4">
                                    Artist
                                    <span className="block text-[#181713]">{artist}</span>
                                </p>
                            )}

                            {date && time && (
                                <p className="mt-4">
                                    Appointment
                                    <span className="block text-[#181713]">
                                        {date} / {time}
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="min-h-[440px]">
                        <AnimatePresence mode="wait">

                            {/* STEP 1 */}
                            {step === 1 && (
                                <motion.div
                                    key="service"
                                    initial={{ opacity: 0, x: 25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -25 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    {services.map((item, index) => (
                                        <button
                                            key={item.name}
                                            type="button"
                                            onClick={() => setService(item.name)}
                                            className={`group grid w-full gap-4 border-t border-black/15 px-2 py-7 text-left transition-all md:grid-cols-[50px_1fr_auto] md:items-center ${service === item.name
                                                    ? "bg-[#181713] px-5 text-[#f4f0e8]"
                                                    : "hover:px-5"
                                                }`}
                                        >
                                            <span
                                                className={`text-[9px] ${service === item.name
                                                        ? "text-white/40"
                                                        : "text-[#777166]"
                                                    }`}
                                            >
                                                0{index + 1}
                                            </span>

                                            <div>
                                                <h3 className="serif text-3xl">
                                                    {item.name}
                                                </h3>

                                                <p
                                                    className={`mt-2 text-[11px] ${service === item.name
                                                            ? "text-white/45"
                                                            : "text-[#777166]"
                                                        }`}
                                                >
                                                    {item.description}
                                                </p>
                                            </div>

                                            <p className="text-[9px] uppercase tracking-[0.15em] opacity-60">
                                                {item.price}
                                            </p>
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <motion.div
                                    key="artist"
                                    initial={{ opacity: 0, x: 25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -25 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    {artists.map((item, index) => (
                                        <button
                                            key={item.name}
                                            type="button"
                                            onClick={() => setArtist(item.name)}
                                            className={`grid w-full gap-4 border-t border-black/15 px-2 py-8 text-left transition-all md:grid-cols-[50px_1fr_auto] md:items-center ${artist === item.name
                                                    ? "bg-[#181713] px-5 text-[#f4f0e8]"
                                                    : "hover:px-5"
                                                }`}
                                        >
                                            <span className="text-[9px] opacity-40">
                                                0{index + 1}
                                            </span>

                                            <div>
                                                <h3 className="serif text-3xl">
                                                    {item.name}
                                                </h3>

                                                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] opacity-45">
                                                    {item.role}
                                                </p>
                                            </div>

                                            {artist === item.name && (
                                                <Check size={18} strokeWidth={1.2} />
                                            )}
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <motion.div
                                    key="time"
                                    initial={{ opacity: 0, x: 25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -25 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <div className="border-t border-black/15 py-8">
                                        <label className="text-[9px] uppercase tracking-[0.2em] text-[#777166]">
                                            Select Date
                                        </label>

                                        <div className="relative mt-4">
                                            <CalendarDays
                                                size={17}
                                                strokeWidth={1.2}
                                                className="absolute left-4 top-1/2 -translate-y-1/2"
                                            />

                                            <input
                                                type="date"
                                                value={date}
                                                min={new Date().toISOString().split("T")[0]}
                                                onChange={(e) => setDate(e.target.value)}
                                                className="w-full border border-black/20 bg-transparent py-5 pl-12 pr-4 text-[12px] outline-none transition-colors focus:border-black"
                                            />
                                        </div>
                                    </div>

                                    <div className="border-t border-black/15 py-8">
                                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#777166]">
                                            Available Times
                                        </p>

                                        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                            {times.map((item) => (
                                                <button
                                                    key={item}
                                                    type="button"
                                                    onClick={() => setTime(item)}
                                                    className={`border px-4 py-5 text-[11px] tracking-[0.1em] transition-all ${time === item
                                                            ? "border-[#181713] bg-[#181713] text-[#f4f0e8]"
                                                            : "border-black/15 hover:border-black"
                                                        }`}
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 4 */}
                            {step === 4 && (
                                <motion.form
                                    key="details"
                                    initial={{ opacity: 0, x: 25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.35 }}
                                    onSubmit={handleSubmit}
                                >
                                    <div className="grid gap-8 md:grid-cols-2">
                                        <InputField
                                            label="Full Name"
                                            type="text"
                                            value={details.name}
                                            onChange={(value) =>
                                                setDetails({ ...details, name: value })
                                            }
                                        />

                                        <InputField
                                            label="Email Address"
                                            type="email"
                                            value={details.email}
                                            onChange={(value) =>
                                                setDetails({ ...details, email: value })
                                            }
                                        />

                                        <InputField
                                            label="Phone Number"
                                            type="tel"
                                            value={details.phone}
                                            onChange={(value) =>
                                                setDetails({ ...details, phone: value })
                                            }
                                        />
                                    </div>

                                    <div className="mt-8">
                                        <label className="text-[9px] uppercase tracking-[0.18em] text-[#777166]">
                                            Anything we should know? / Optional
                                        </label>

                                        <textarea
                                            value={details.notes}
                                            onChange={(e) =>
                                                setDetails({
                                                    ...details,
                                                    notes: e.target.value,
                                                })
                                            }
                                            rows={4}
                                            className="mt-3 w-full resize-none border-b border-black/25 bg-transparent py-3 text-[13px] outline-none transition-colors focus:border-black"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={
                                            !details.name ||
                                            !details.email ||
                                            !details.phone
                                        }
                                        className="mt-12 flex items-center gap-6 bg-[#181713] px-7 py-5 text-[#f4f0e8] transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
                                    >
                                        <span className="text-[10px] uppercase tracking-[0.2em]">
                                            Request Appointment
                                        </span>

                                        <ArrowRight size={15} strokeWidth={1.2} />
                                    </button>
                                </motion.form>
                            )}

                        </AnimatePresence>

                        {/* Navigation */}
                        {step < 4 && (
                            <div className="mt-12 flex items-center justify-between border-t border-black/15 pt-7">
                                <button
                                    type="button"
                                    disabled={step === 1}
                                    onClick={() => setStep(step - 1)}
                                    className="flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] disabled:opacity-20"
                                >
                                    <ArrowLeft size={14} strokeWidth={1.2} />
                                    Back
                                </button>

                                <button
                                    type="button"
                                    disabled={!canContinue}
                                    onClick={() => setStep(step + 1)}
                                    className="flex items-center gap-4 bg-[#181713] px-6 py-4 text-[#f4f0e8] transition-opacity disabled:cursor-not-allowed disabled:opacity-25"
                                >
                                    <span className="text-[9px] uppercase tracking-[0.18em]">
                                        Continue
                                    </span>

                                    <ArrowRight size={14} strokeWidth={1.2} />
                                </button>
                            </div>
                        )}

                        {step === 4 && (
                            <button
                                type="button"
                                onClick={() => setStep(3)}
                                className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.18em]"
                            >
                                <ArrowLeft size={14} strokeWidth={1.2} />
                                Back
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}

function InputField({
    label,
    type,
    value,
    onChange,
}: {
    label: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <label>
            <span className="text-[9px] uppercase tracking-[0.18em] text-[#777166]">
                {label}
            </span>

            <input
                required
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-3 w-full border-b border-black/25 bg-transparent py-3 text-[13px] outline-none transition-colors focus:border-black"
            />
        </label>
    );
}