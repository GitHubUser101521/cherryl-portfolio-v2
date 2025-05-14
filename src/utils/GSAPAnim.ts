import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type to = {
    x?: number,
    y?: number,
    duration: number,
    ease: string,
    opacity: number,
}

type from = {
    x?: number,
    y?: number,
    opacity: number,
    stagger: number
}

type SlideDirection = 'right' | 'left' | 'up' | 'down'

export function animateSlideIn(target: any, direction: SlideDirection) {
    let from: from = { opacity: 0.5, stagger: 0.1 }
    let to: to = { x: 0, y: 0, duration: 1.5, ease: "power3.out", opacity: 1 }

    switch (direction) {
        case 'left':
            from.x = 100
            break
        case 'right':
            from.x = -100
            break
        case 'down':
            from.y = -100
            break
        case 'up':
            from.y = 100
            break
        default:
            from.x = -100
            break
    }

    gsap.fromTo(target, from, to)

    return () => gsap.killTweensOf(target)
}

export function groupStagger(group: any, staggerDuration: number) {
    ScrollTrigger.create({
        trigger: group,
        start: "top bottom", 
        end: "bottom top", 
        onEnter: () => {
            gsap.fromTo(group,
                {
                    y: 30,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: staggerDuration
                }
            )
        },
        toggleActions: "play complete restart restart",
    })

    
    return () => gsap.killTweensOf(group)
}

export function animScale(target: any, targetScale: number) {
    gsap.to(target,
        {
            scale: targetScale,
            ease: 'power4.inOut'
        }
    )

    return () => gsap.killTweensOf(target)
}

export function animateRotation(target: any, rotation: number) {
    gsap.fromTo(target,
        {
            rotate: 0
        },
        {
            rotate: rotation,
            duration: 0.2,
            ease: "power2.out"
        }
    )

    return () => gsap.killTweensOf(target)
}