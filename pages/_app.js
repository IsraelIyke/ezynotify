const { motion, AnimatePresence } = require("framer-motion");
import "../styles/globals.css";
import "../styles/textfield.css";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../client";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
