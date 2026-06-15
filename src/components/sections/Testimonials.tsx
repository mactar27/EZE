"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    text: "EZK Agency a totalement transformé notre présence en ligne. Une équipe créative et professionnelle.",
    rating: 5,
    author: "Client satisfait",
  },
  {
    id: 2,
    text: "Grâce à EZK, notre visibilité a augmenté et nos ventes aussi. Excellent accompagnement !",
    rating: 5,
    author: "Client satisfait",
  },
  {
    id: 3,
    text: "Leur expertise en création de contenu et marketing digital est vraiment remarquable.",
    rating: 5,
    author: "Client satisfait",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[1.75rem] font-bold font-poppins text-dark mb-4 tracking-tight uppercase">
              TÉMOIGNAGES CLIENTS
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center gap-6">
          
          {/* Left Arrow */}
          <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-primary hover:bg-gray-50 transition-colors shrink-0 shadow-sm absolute -left-5 lg:static z-10">
            <ChevronLeft size={20} />
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <Quote className="text-primary w-8 h-8 mb-4 rotate-180 opacity-80" />
                  <p className="text-gray-600 text-[0.9rem] leading-relaxed mb-6 font-medium">
                    {testimonial.text}
                  </p>
                </div>
                
                <div>
                  <div className="flex gap-1 text-primary mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 font-medium">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-primary hover:bg-gray-50 transition-colors shrink-0 shadow-sm absolute -right-5 lg:static z-10">
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}
