import { onMounted, ref, watch } from "vue";
import { useColorSchemeStore } from "@/stores/colorScheme";

const bgColorClasses = {
  blue: {
    100: "bg-blue-100",
    200: "bg-blue-200",
    300: "bg-blue-300",
    400: "bg-blue-400",
    500: "bg-blue-500",
    600: "bg-blue-600",
    700: "bg-blue-700",
    800: "bg-blue-800",
    900: "bg-blue-900",
  },
  teal: {
    100: "bg-teal-100",
    200: "bg-teal-200",
    300: "bg-teal-300",
    400: "bg-teal-400",
    500: "bg-teal-500",
    600: "bg-teal-600",
    700: "bg-teal-700",
    800: "bg-teal-800",
    900: "bg-teal-900",
  },
  purple: {
    100: "bg-purple-100",
    200: "bg-purple-200",
    300: "bg-purple-300",
    400: "bg-purple-400",
    500: "bg-purple-500",
    600: "bg-purple-600",
    700: "bg-purple-700",
    800: "bg-purple-800",
    900: "bg-purple-900",
  },
  green: {
    100: "bg-green-100",
    200: "bg-green-200",
    300: "bg-green-300",
    400: "bg-green-400",
    500: "bg-green-500",
    600: "bg-green-600",
    700: "bg-green-700",
    800: "bg-green-800",
    900: "bg-green-900",
  },
  red: {
    100: "bg-red-100",
    200: "bg-red-200",
    300: "bg-red-300",
    400: "bg-red-400",
    500: "bg-red-500",
    600: "bg-red-600",
    700: "bg-red-700",
    800: "bg-red-800",
    900: "bg-red-900",
  },
  orange: {
    100: "bg-orange-100",
    200: "bg-orange-200",
    300: "bg-orange-300",
    400: "bg-orange-400",
    500: "bg-orange-500",
    600: "bg-orange-600",
    700: "bg-orange-700",
    800: "bg-orange-800",
    900: "bg-orange-900",
  },
  yellow: {
    100: "bg-yellow-100",
    200: "bg-yellow-200",
    300: "bg-yellow-300",
    400: "bg-yellow-400",
    500: "bg-yellow-500",
    600: "bg-yellow-600",
    700: "bg-yellow-700",
    800: "bg-yellow-800",
    900: "bg-yellow-900",
  },
  indigo: {
    100: "bg-indigo-100",
    200: "bg-indigo-200",
    300: "bg-indigo-300",
    400: "bg-indigo-400",
    500: "bg-indigo-500",
    600: "bg-indigo-600",
    700: "bg-indigo-700",
    800: "bg-indigo-800",
    900: "bg-indigo-900",
  },
  pink: {
    100: "bg-pink-100",
    200: "bg-pink-200",
    300: "bg-pink-300",
    400: "bg-pink-400",
    500: "bg-pink-500",
    600: "bg-pink-600",
    700: "bg-pink-700",
    800: "bg-pink-800",
    900: "bg-pink-900",
  },
  lime: {
    100: "bg-lime-100",
    200: "bg-lime-200",
    300: "bg-lime-300",
    400: "bg-lime-400",
    500: "bg-lime-500",
    600: "bg-lime-600",
    700: "bg-lime-700",
    800: "bg-lime-800",
    900: "bg-lime-900",
  },
  sky: {
    100: "bg-sky-100",
    200: "bg-sky-200",
    300: "bg-sky-300",
    400: "bg-sky-400",
    500: "bg-sky-500",
    600: "bg-sky-600",
    700: "bg-sky-700",
    800: "bg-sky-800",
    900: "bg-sky-900",
  },
  emerald: {
    100: "bg-emerald-100",
    200: "bg-emerald-200",
    300: "bg-emerald-300",
    400: "bg-emerald-400",
    500: "bg-emerald-500",
    600: "bg-emerald-600",
    700: "bg-emerald-700",
    800: "bg-emerald-800",
    900: "bg-emerald-900",
  },
  stone: {
    100: "bg-stone-100",
    200: "bg-stone-200",
    300: "bg-stone-300",
    400: "bg-stone-400",
    500: "bg-stone-500",
    600: "bg-stone-600",
    700: "bg-stone-700",
    800: "bg-stone-800",
    900: "bg-stone-900",
  },
  zinc: {
    100: "bg-zinc-100",
    200: "bg-zinc-200",
    300: "bg-zinc-300",
    400: "bg-zinc-400",
    500: "bg-zinc-500",
    600: "bg-zinc-600",
    700: "bg-zinc-700",
    800: "bg-zinc-800",
    900: "bg-zinc-900",
  },
  slate: {
    100: "bg-slate-100",
    200: "bg-slate-200",
    300: "bg-slate-300",
    400: "bg-slate-400",
    500: "bg-slate-500",
    600: "bg-slate-600",
    700: "bg-slate-700",
    800: "bg-slate-800",
    900: "bg-slate-900",
  },
};

const textColorClasses = {
  blue: {
    100: "text-blue-100",
    200: "text-blue-200",
    300: "text-blue-300",
    400: "text-blue-400",
    500: "text-blue-500",
    600: "text-blue-600",
    700: "text-blue-700",
    800: "text-blue-800",
    900: "text-blue-900",
  },
  teal: {
    100: "text-teal-100",
    200: "text-teal-200",
    300: "text-teal-300",
    400: "text-teal-400",
    500: "text-teal-500",
    600: "text-teal-600",
    700: "text-teal-700",
    800: "text-teal-800",
    900: "text-teal-900",
  },
  purple: {
    100: "text-purple-100",
    200: "text-purple-200",
    300: "text-purple-300",
    400: "text-purple-400",
    500: "text-purple-500",
    600: "text-purple-600",
    700: "text-purple-700",
    800: "text-purple-800",
    900: "text-purple-900",
  },
  green: {
    100: "text-green-100",
    200: "text-green-200",
    300: "text-green-300",
    400: "text-green-400",
    500: "text-green-500",
    600: "text-green-600",
    700: "text-green-700",
    800: "text-green-800",
    900: "text-green-900",
  },
  red: {
    100: "text-red-100",
    200: "text-red-200",
    300: "text-red-300",
    400: "text-red-400",
    500: "text-red-500",
    600: "text-red-600",
    700: "text-red-700",
    800: "text-red-800",
    900: "text-red-900",
  },
  orange: {
    100: "text-orange-100",
    200: "text-orange-200",
    300: "text-orange-300",
    400: "text-orange-400",
    500: "text-orange-500",
    600: "text-orange-600",
    700: "text-orange-700",
    800: "text-orange-800",
    900: "text-orange-900",
  },
  yellow: {
    100: "text-yellow-100",
    200: "text-yellow-200",
    300: "text-yellow-300",
    400: "text-yellow-400",
    500: "text-yellow-500",
    600: "text-yellow-600",
    700: "text-yellow-700",
    800: "text-yellow-800",
    900: "text-yellow-900",
  },
  indigo: {
    100: "text-indigo-100",
    200: "text-indigo-200",
    300: "text-indigo-300",
    400: "text-indigo-400",
    500: "text-indigo-500",
    600: "text-indigo-600",
    700: "text-indigo-700",
    800: "text-indigo-800",
    900: "text-indigo-900",
  },
  pink: {
    100: "text-pink-100",
    200: "text-pink-200",
    300: "text-pink-300",
    400: "text-pink-400",
    500: "text-pink-500",
    600: "text-pink-600",
    700: "text-pink-700",
    800: "text-pink-800",
    900: "text-pink-900",
  },
  lime: {
    100: "text-lime-100",
    200: "text-lime-200",
    300: "text-lime-300",
    400: "text-lime-400",
    500: "text-lime-500",
    600: "text-lime-600",
    700: "text-lime-700",
    800: "text-lime-800",
    900: "text-lime-900",
  },
  sky: {
    100: "text-sky-100",
    200: "text-sky-200",
    300: "text-sky-300",
    400: "text-sky-400",
    500: "text-sky-500",
    600: "text-sky-600",
    700: "text-sky-700",
    800: "text-sky-800",
    900: "text-sky-900",
  },
  emerald: {
    100: "text-emerald-100",
    200: "text-emerald-200",
    300: "text-emerald-300",
    400: "text-emerald-400",
    500: "text-emerald-500",
    600: "text-emerald-600",
    700: "text-emerald-700",
    800: "text-emerald-800",
    900: "text-emerald-900",
  },
  stone: {
    100: "text-stone-100",
    200: "text-stone-200",
    300: "text-stone-300",
    400: "text-stone-400",
    500: "text-stone-500",
    600: "text-stone-600",
    700: "text-stone-700",
    800: "text-stone-800",
    900: "text-stone-900",
  },
  zinc: {
    100: "text-zinc-100",
    200: "text-zinc-200",
    300: "text-zinc-300",
    400: "text-zinc-400",
    500: "text-zinc-500",
    600: "text-zinc-600",
    700: "text-zinc-700",
    800: "text-zinc-800",
    900: "text-zinc-900",
  },
  slate: {
    100: "text-slate-100",
    200: "text-slate-200",
    300: "text-slate-300",
    400: "text-slate-400",
    500: "text-slate-500",
    600: "text-slate-600",
    700: "text-slate-700",
    800: "text-slate-800",
    900: "text-slate-900",
  },
};

export function useColorSchemes() {
  const colorScheme = ref("blue");
  const colorShade = ref("500");

  onMounted(() => {
    const { colors, shades } = useColorSchemeStore();

    if (colors.includes(localStorage.colorScheme)) {
      colorScheme.value = localStorage.colorScheme;
    }

    if (shades.includes(localStorage.colorShade)) {
      colorShade.value = localStorage.shade;
    }
  });

  watch(colorScheme, (colorValue) => {
    localStorage.colorScheme = colorValue;
  });

  watch(colorShade, (shadeValue) => {
    localStorage.shade = shadeValue;
  });

  return { bgColorClasses, textColorClasses, colorScheme, colorShade };
}
