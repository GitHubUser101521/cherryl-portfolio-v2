import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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