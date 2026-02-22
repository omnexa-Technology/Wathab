"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "../../lib/utils"
import { Button } from "./button"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef(
  (
    {
      orientation = "horizontal",
      opts = {},
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )

    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api) => {
      if (!api) return
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    React.useEffect(() => {
      if (!api) return
      onSelect(api)
      api.on("select", onSelect)
      api.on("reInit", onSelect)

      return () => {
        api.off("select", onSelect)
      }
    }, [api, onSelect])

    const scrollPrev = () => api?.scrollPrev()
    const scrollNext = () => api?.scrollNext()

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          direction: opts.direction || "ltr",
        }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)

const CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef } = useCarousel()

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex -ml-4", className)}
          {...props}
        />
      </div>
    )
  }
)

const CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full pl-4",
          className
        )}
        {...props}
      />
    )
  }
)

const CarouselPrevious = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        size="icon"
        variant="outline"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 -left-12 h-8 w-8 rounded-full",
          className
        )}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
    )
  }
)

const CarouselNext = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        size="icon"
        variant="outline"
        disabled={!canScrollNext}
        onClick={scrollNext}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 -right-12 h-8 w-8 rounded-full",
          className
        )}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    )
  }
)

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
