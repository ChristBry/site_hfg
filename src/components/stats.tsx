import { useEffect } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = () => {

    const [ref, inView] = useInView({
        threshold: 0.9,
    })

    const stats = {
        stats1: useMotionValue(0),
        stats2: useMotionValue(0),
        stats3: useMotionValue(0),
        stats4: useMotionValue(0),
    };

    const rounded1 = useTransform(stats.stats1, (value) => Math.round(value))
    const rounded2 = useTransform(stats.stats2, (value) => Math.round(value))
    const rounded3 = useTransform(stats.stats3, (value) => Math.round(value))
    const rounded4 = useTransform(stats.stats4, (value) => Math.round(value))

    useEffect(() => {
        if (inView) {
            const animation1 = animate(stats.stats1, 15, { duration: 1 });
            const animation2 = animate(stats.stats2, 50, { duration: 1 });
            const animation3 = animate(stats.stats3, 5, { duration: 1 });
            const animation4 = animate(stats.stats4, 30, { duration: 1 });

            return () => {
                animation1.stop();
                animation2.stop();
                animation3.stop();
                animation4.stop();
            };
        }
    }, [inView])

  return (
    <div ref={ref} className="stats flex justify-center items-center sm:gap-20">
    <div className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
        <div className='flex items-center'>
            <p className='plus'>+</p>
            <motion.h1 className='text-4xl xl:text-6xl'>{rounded1}</motion.h1>
        </div>
        <p className='text-center text-sm sm:text-xl'>Years of experience</p>
    </div>
    <div className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
        <div className='flex items-center'>
            <p className='plus'>+</p>
            <motion.h1 className='text-4xl xl:text-6xl'>{rounded2}</motion.h1>
        </div>
        <p className='text-center text-sm sm:text-xl'>Satisfied Customers</p>
    </div>
    <div className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
        <div className='flex items-center'>
            <p className='plus'>+</p>
            <motion.h1 className='text-4xl xl:text-6xl'>{rounded3}</motion.h1>
        </div>
        <p className='text-center text-sm sm:text-xl'>Expert Consultant</p>
    </div>
    <div className="stats-experience flex flex-col items-center xl:w-[25%] sm:w-[50%]">
        <div className='flex items-center'>
            <p className='plus'>+</p>
            <motion.h1 className='text-4xl xl:text-6xl'>{rounded4}</motion.h1>
        </div>
        <p className='text-center text-sm sm:text-xl'>Problems Solved</p>
    </div>
</div>
  )
}

export default stats