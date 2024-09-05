import {HandIcon, Pencil1Icon, Pencil2Icon, RocketIcon} from "@radix-ui/react-icons";
import {Handshake} from "lucide-react";

export const features = [
    {
        title: "Fast, Secure Azure Migrations",
        description: "Seamless cloud migrations for federal contractors, ensuring quick, cost-effective transitions while meeting all compliance requirements.",
        icon: <RocketIcon className="w-6 h-6"/>,
    },
    {
        title: "DevOps for Compliance & Savings",
        description: "Leverage DevOps to automate compliance and optimize costs, making your Azure environment more efficient and secure.",
        icon: <Pencil2Icon className="w-6 h-6"/>,
    },
    {
        title: "Scalable Cloud Deployments",
        description: "We build scalable Azure solutions that accelerate deployments and ensure your federal projects run smoothly and securely.",
        icon: <Handshake className="w-6 h-6"/>,
    },
];
