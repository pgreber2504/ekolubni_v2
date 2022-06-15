import classes from "./Sidebar.module.scss";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_DATA } from "../../constants/nav-data";
import { Link } from "react-scroll";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

function Sidebar() {
  //   const [open, cycleOpen] = useCycle(false, true);
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            className={classes.sidebar}
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className={classes.container}
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {NAV_DATA.map(({ id, title }) => (
                <motion.a
                  key={id}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  <Link onClick={() => setOpen(false)} to={id}>
                    {title}
                  </Link>
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div
        className={classes["btn-container"]}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className={classes["btn-one"]}></div>
        <div className={classes["btn-two"]}></div>
        <div className={classes["btn-three"]}></div>
      </div>
    </>
  );
}

export default Sidebar;
