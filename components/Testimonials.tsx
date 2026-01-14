'use client';

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "This saved me hours of repetitive form testing. Straight to the point and does exactly what I need without any fuss.",
    author: "Sarah Chen",
    source: "Reddit",
    icon: "/images/reddit.svg",
    role: "Frontend Developer",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    text: "Lightweight, predictable, and does exactly what it says. Makes testing forms much more efficient and reliable.",
    author: "Michael Rodriguez",
    source: "Stack Overflow",
    icon: "/images/stackov.png",
    role: "QA Engineer",
    rating: 4.5,
    date: "1 month ago",
  },
  {
    text: "Saved about 3 hours of manual data entry during our last QA cycle. Highly recommend for any dev or tester working with forms.",
    author: "Alex Thompson",
    source: "X",
    icon: "/images/x.png",
    role: "Full-Stack Dev",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    text: "We use this internally during QA passes. Works reliably across all our different form types and configurations.",
    author: "Jordan Patel",
    source: "Facebook",
    icon: "/images/fb.png",
    role: "QA Lead",
    rating: 4,
    date: "3 days ago",
  },
  {
    text: "Instantly useful. Installed and kept it. One of those extensions that proves its value immediately.",
    author: "Emily Watson",
    source: "Reddit",
    icon: "/images/reddit.svg",
    role: "Backend Developer",
    rating: 5,
    date: "1 week ago",
  },
  {
    text: "One of those tools you don't think about until you need it. Then you wonder how you worked without it.",
    author: "David Kim",
    source: "X",
    icon: "/images/x.png",
    role: "Software Tester",
    rating: 4.5,
    date: "4 days ago",
  },
  {
    text: "Perfect for demo and staging environments. Saves so much time during client presentations and testing.",
    author: "Maria Santos",
    source: "Stack Overflow",
    icon: "/images/stackov.png",
    role: "Junior dev",
    rating: 4.5,
    date: "2 weeks ago",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="mt-6 flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400 inline-block mr-1" />
      ))}
      {hasHalfStar && (
        <div className="relative w-4 h-4 inline-block mr-1">
          <Star className="w-4 h-4 text-yellow-400 absolute" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400 inline-block mr-1" />
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#f3f4f6] py-16 md:py-20 " id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">
          Developers using QuickerFill
        </h2>

        <div className="relative">
          {canScrollPrev && (
            <button
              onClick={scrollPrev}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}

          {canScrollNext && (
            <button
              onClick={scrollNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[300px] min-h-[300px] max-w-[320px] border-[1.1px] border-gray-300 bg-white rounded-md p-5 flex-shrink-0"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={item.icon}
                      alt={item.source}
                      className="w-5 h-5"
                    />
                    <span className="text-sm text-gray-500">
                      {item.source}
                    </span>
                  </div>

                  <p className="text-gray-800 text-sm leading-relaxed">
                    {`"${item.text}"`}
                  </p>

                  <StarRating rating={item.rating} />

                  <div className="mt-4 text-sm text-gray-600">
                    <span className="mr-2">{item.author}</span> | <span className="opacity-60 ml-2">{item.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}