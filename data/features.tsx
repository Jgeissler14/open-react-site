import { HandIcon, Pencil1Icon, Pencil2Icon, RocketIcon } from "@radix-ui/react-icons";
import { Handshake } from "lucide-react";

export const features = [
    {
        title: "Infrastructure as Code",
        description: "We guide you through the setup and implementation of Infrastructure as Code (IaC) using tools like Terraform, Packer, and Ansible to ensure safe, repeatable, and scalable infrastructure management.",
        icon: <RocketIcon className="w-6 h-6"/>,
    },
    {
        title: "Build Configuration",
        description: "Collaborate with us to design and configure your cloud environment using best practices for automation, ensuring efficient resource management and fewer errors.",
        icon: <Pencil2Icon className="w-6 h-6"/>,
    },
    {
        title: "CI/CD Implementation",
        description: "We help you implement Continuous Integration and Continuous Delivery (CI/CD) pipelines to streamline development, testing, and deployment cycles with minimal downtime.",
        icon: <Handshake className="w-6 h-6"/>,
    },
];
