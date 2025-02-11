import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { colors, animations } from '@/constants/theme';
import useBreakpoint from '@/hooks/useBreakpoint';
import { DataClass } from '@/data/education';

const Landing = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  DataClass.isrefresh = false;
  return (
    <div
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24"
      style={{ background: colors.background }}
    >
      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-8 right-8 flex gap-4"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Github
            className="w-6 h-6"
            style={{ color: colors.accent }}
          />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <Linkedin
            className="w-6 h-6"
            style={{ color: colors.accent }}
          />
        </a>
        <a
          href="mailto:sairamreddy2211@gmail.com"
          className="hover:scale-110 transition-transform"
        >
          <Mail
            className="w-6 h-6"
            style={{ color: colors.accent }}
          />
        </a>
      </motion.div>

      <motion.div
        variants={animations.stagger.container}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Introduction */}
        <div>
         {isMobile && <div className='flex justify-center my-10'>
            <motion.img variants={animations.fadeUp} src="mypic.jpeg" className='h-32 rounded-full' />
          </div>}

          <div className='flex gap-10 align-middle'>
          {isDesktop && 
            <motion.img variants={animations.fadeUp} src="mypic.jpeg" className='h-36 rounded-lg' />
        }
          <motion.div variants={animations.fadeUp} className="space-y-3">
            <h2
              className="text-xl font-medium"
              style={{ color: colors.accent }}
            >
              Hello, my journey begins here
            </h2>
            <h1
              className="text-4xl md:text-6xl font-bold"
              style={{ color: colors.text.primary }}
            >
              I'm Sai Ram Reddy
            </h1>
            <p
              className="text-xl md:text-2xl"
              style={{ color: colors.text.secondary }}
            >
              Frontend Developer crafting financial applications
            </p>
          </motion.div>
         
          </div>

        </div>


        {/* Brief Summary */}
        <motion.p
          variants={animations.fadeUp}
          className="text-lg max-w-2xl"
          style={{ color: colors.text.tertiary }}
        >
          Currently at Bajaj FinServ, transforming complex financial services
          into elegant, user-friendly solutions that impact millions.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          variants={animations.fadeUp}
          className="flex gap-8"
        >
          {[
            { number: '2+', label: 'Years of Experience' },
            { number: '50M+', label: 'Active Users' },
            { number: '25+', label: 'Features Shipped' }
          ].map((stat, index) => (
            <div key={index} className="space-y-1">
              <span
                className="text-2xl font-bold block"
                style={{ color: colors.accent }}
              >
                {stat.number}
              </span>
              <p
                className="text-sm"
                style={{ color: colors.text.tertiary }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={animations.fadeUp} className="pt-8">
          <Button
            onClick={() => navigate('/journey')}
            className="group px-8 py-6 rounded-full text-xl flex items-center gap-2 transition-all duration-300"
            style={{
              background: colors.accent,
              color: colors.text.primary,
            }}
          >
            Explore My Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Scroll Indicator */}


      </motion.div>
      {/* <div className='absolute bottom-8 left-0 w-full flex justify-center'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animations.fadeUp}
          className="flex flex-col items-center gap-2"
        >
          <p style={{ color: colors.text.tertiary }} className="text-sm">
            Scroll to begin
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-8 rounded-full relative overflow-hidden"
            style={{ background: `${colors.accent}30` }}
          >
            <motion.div
              animate={{ y: [0, 28, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-full h-1/2 rounded-full absolute"
              style={{ background: colors.accent }}
            />
          </motion.div>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Landing;