"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ContactForm = () => {
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const [selectedBudget, setSelectedBudget] = useState("$1000 - $5000");
  const [selectedService, setSelectedService] = useState("CONSULTANCY");

  const budgetOptions = ["$1000", "$2000", "$3000", "$4000", "$5000"];
  const serviceOptions = ["GAME DESIGN", "PRODUCT DESIGN", "WEB DESIGN"];

  return (
    <div className="flex items-center justify-center bg-zinc-900 p-4">
      <div className="bg-white rounded-[32px] p-10 w-full max-w-2xl shadow-sm">
        <h1 className="text-3xl font-medium text-zinc-900 mb-8">
          Have a project in mind?
        </h1>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full bg-[#F4F4F4] border-none rounded-xl p-4 text-sm outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-zinc-200"
            />
            <input
              type="email"
              placeholder="BUSINESS EMAIL"
              className="w-full bg-[#F4F4F4] border-none rounded-xl p-4 text-sm outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-zinc-200"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-[11px] font-bold text-zinc-800 mb-2 tracking-wider">
                BUDGET
              </label>
              <button
                type="button"
                onClick={() => {
                  setBudgetOpen(!budgetOpen);
                  setServiceOpen(false);
                }}
                className={`w-full flex items-center justify-between bg-[#F4F4F4] p-4 rounded-xl text-sm text-zinc-800 transition-all ${
                  budgetOpen ? "rounded-b-none" : ""
                }`}
              >
                <span>{selectedBudget}</span>
                {budgetOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>

              {budgetOpen && (
                <div className="absolute z-10 w-full bg-[#F4F4F4] rounded-b-xl shadow-lg max-h-48 overflow-y-auto border-t border-zinc-200">
                  {budgetOptions.map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setSelectedBudget(opt);
                        setBudgetOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-zinc-100 cursor-pointer text-sm text-zinc-600"
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="block text-[11px] font-bold text-zinc-800 mb-2 tracking-wider">
                SERVICE
              </label>
              <button
                type="button"
                onClick={() => {
                  setServiceOpen(!serviceOpen);
                  setBudgetOpen(false);
                }}
                className={`w-full flex items-center justify-between bg-[#F4F4F4] p-4 rounded-xl text-sm text-zinc-800 transition-all ${
                  serviceOpen ? "rounded-b-none" : ""
                }`}
              >
                <span>{selectedService}</span>
                {serviceOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>

              {serviceOpen && (
                <div className="absolute z-10 w-full bg-[#F4F4F4] rounded-b-xl shadow-lg max-h-48 overflow-y-auto border-t border-zinc-200">
                  {serviceOptions.map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        setSelectedService(opt);
                        setServiceOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-zinc-100 cursor-pointer text-sm text-zinc-600"
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full">
            <textarea
              placeholder="MESSAGE"
              rows={4}
              className="w-full bg-[#F4F4F4] border-none rounded-xl p-4 text-sm outline-none placeholder:text-zinc-400 focus:ring-1 focus:ring-zinc-200 resize-none"
            />
          </div>

          <div className="">
            <button
              type="submit"
              className="flex items-center gap-4 group transition-all"
            >
              <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[90deg]">
                <FaPlus size={14} />
              </div>

              <span className="text-xs font-bold tracking-widest text-zinc-900">
                LET,S TALK
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
