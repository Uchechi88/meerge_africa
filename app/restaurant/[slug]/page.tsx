"use client";
import Dashboard from "@/components/dashboard/main";
import { SalesHistoryProps } from "@/components/dashboard/sales-history";
import AwaitingVerificationModal from "@/components/modals/AwaitingVerificationModal";
import Navbar from "@/components/ui/navbar";
import { DemoContext } from "@/lib/contexts/demo";
import { useContext, useState } from "react";

const dashboardData = {
  restaurantName: "Sample Restaurant",
  stats: {
    totalOrders: 180,
    pendingOrders: 20,
    confirmedOrders: 160,
    totalSales: 50,
    totalOrdersPercentage: 62,
    pendingOrdersPercentage: 30,
    confirmedOrdersPercentage: 79,
    totalSalesPercentage: 50,
  },
  newOrders: [
    {
      id: "RBP-3456",
      items: "BBQ Full Chicken",
      price: 10500,
      type: "Eat-In",
    },
    {
      id: "RBP-4673",
      items: "BBQ Chicken Thighs",
      price: 7000,
      type: "Take-Out",
    },
    {
      id: "RBP-2345",
      items: "Grilled Fish with Fried Plantain With Salad",
      price: 2500,
      type: "Delivery",
    },
  ],
  salesHistory: [
    {
      id: "RBP-0939",
      paymentType: "Credit Card",
      status: "failed",
    },
    {
      id: "RBP-0938",
      paymentType: "Bank Transfer",
      status: "success",
    },
    {
      id: "RBP-0937",
      paymentType: "Bank Transfer",
      status: "success",
    },
    {
      id: "RBP-0936",
      paymentType: "Cash",
      status: "failed",
    },
    {
      id: "RBP-7399",
      paymentType: "Bank Transfer",
      status: "failed",
    },
  ] as SalesHistoryProps["sales"],
  topMenu: [
    {
      id: "1",
      name: "BBQ Full Chicken",
      price: 5400,
      orderCount: 10,
      imageUrl: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737833705/food-1_cnlhrx.png",
    },
    {
      id: "2",
      name: "BBQ Chicken Burger",
      price: 3000,
      orderCount: 7,
      imageUrl: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737833725/food-2_dlhuhk.png",
    },
    {
      id: "3",
      name: "Grilled Fish with Fried Plantain",
      price: 2500,
      orderCount: 5,
      imageUrl: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737833766/food-3_mibr7j.png",
    },
    {
      id: "4",
      name: "BBQ Chicken Thighs",
      price: 2000,
      orderCount: 4,
      imageUrl: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737833767/food-4_jvlxs1.png",
    },
    {
      id: "5",
      name: "BBQ Chicken Drumsticks",
      price: 1500,
      orderCount: 2,
      imageUrl: "https://res.cloudinary.com/daf7mvn2b/image/upload/v1737833800/food-5_hg1un5.png",
    },
  ],
};

const emptyData = {
  restaurantName: "Sample Restaurant",
  stats: {
    totalOrders: 0,
    pendingOrders: 0,
    confirmedOrders: 0,
    totalSales: 0,
    totalOrdersPercentage: 0,
    pendingOrdersPercentage: 0,
    confirmedOrdersPercentage: 0,
    totalSalesPercentage: 0,
  },
  newOrders: [],
  salesHistory: [],
  topMenu: [],
};

export default function Home() {
  const { demo } = useContext(DemoContext);
  const data = demo ? dashboardData : emptyData;
  const [isUserVerified,setIsUserVerified]=useState(false)
  const [isModalOpen, setIsModalOpen] = useState(isUserVerified);
  const handeleUserVerificationStatus =()=>{
    if(!isUserVerified){
      return true
    }else{
      return false;
    }
  }
  return (
    <>
      <Navbar />
      <Dashboard
        restaurantName={data.restaurantName}
        stats={data.stats}
        orders={data.newOrders}
        sales={data.salesHistory}
        topMenuItems={data.topMenu}
      />
      <AwaitingVerificationModal isOpen={handeleUserVerificationStatus()} onClose={() => setIsModalOpen(handeleUserVerificationStatus)} />
    </>
  );
}
