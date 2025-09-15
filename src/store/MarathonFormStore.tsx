import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  password: "",
  confirmPassword: "",
  haveCoupon: false,
  couponCode: "",
  total: 0,
  setHaveCoupon: (_haveCoupon) =>
    set(() => ({  
      haveCoupon: _haveCoupon,
    })),
  setCouponCode: (_couponCode) =>
    set(() => ({
      couponCode: _couponCode,
    })),
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
      password: "",
      confirmPassword: "",
      haveCoupon: false,
      couponCode: "",
      total: 0,
    }),
  setPassword: (_password) =>
    set(() => ({
      password: _password, })),
  setconfirmPassword: (_confirmPassword) =>
    set(() => ({
      confirmPassword: _confirmPassword,
    })),
  discountCupon: () =>
    set((state) => {
      let payment = 0;
      if (state.plan === "funrun") payment = 500;
      else if (state.plan === "mini") payment = 800;
      else if (state.plan === "half") payment = 1200;
      else if (state.plan === "full") payment = 1500;
      if (state.haveCoupon && state.couponCode === "CMU2025") payment = payment * 0.7;
      return { total: payment };
    }),
}));
