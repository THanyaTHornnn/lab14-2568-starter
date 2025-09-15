import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  password: string;
  confirmPassword: string;
  haveCoupon: boolean;
  couponCode: string;
  total: number;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  reset: () => void;
  setPassword: (v: string) => void;
  setconfirmPassword: (v: string) => void;
  setHaveCoupon: (v: boolean) => void;
  setCouponCode: (v: string) => void;
  discountCupon: () => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
}
export type { MarathonFormState }