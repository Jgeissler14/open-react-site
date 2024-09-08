import {footerLinks} from "@/data/footerLinks";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import React from "react";

const Footer = () => {
    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <p>
                        Cloudzap is a DevOps service for federal contractors on Azure. We provide fast, secure Azure migrations, DevOps for compliance and savings, and scalable cloud deployments.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                        <Link href="/#pricing">
                            <Button>
                                Get started
                            </Button>
                        </Link>
                        <Link href="https://calendly.com/jrgeissler14/30min">
                            <Button variant="secondary">
                                Book a meeting
                            </Button>
                        </Link>
                        <Link href="https://www.youtube.com/@JoshGeissler">
                            <Button variant="secondary">
                                YouTube
                            </Button>
                        </Link>
                        <Link href="https://blog.cloudzap.co">
                            <Button variant="secondary">
                                Blog
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© {new Date().getFullYear()} Cloudzap. All rights reserved.</p>
                    {/* <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {footerLinks.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer;