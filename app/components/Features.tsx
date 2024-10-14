import React from "react";
import Image from "next/image";
import featuresImg from "../assets/features/working-man-img.png";

export default function Features() {
  const features: { id: number; title: string; description: string }[] = [
    {
      id: 1,
      title: "Intuitive User Interface",
      description: `Manage your tasks in a simple and clear way. Our intuitive interface makes 
      adding, editing, and tracking tasks quick and enjoyable, allowing you to focus on what 
      matters most.`,
    },
    {
      id: 2,
      title: "Task Categorization",
      description: `Organize your tasks by categories, priorities, or projects. With flexible filtering 
      options, you'll easily find what you need, making your work more organized and efficient.`,
    },
    {
      id: 3,
      title: "Team Collaboration",
      description: `Facilitate teamwork by assigning tasks and sharing progress. This way, every team member 
      will know what to do, and you'll gain full control over the project.`,
    },
  ];

  return (
    <div
      className="grid grid-cols-2 gap-12 pt-20 px-16 max-w-normal mx-auto mb-32 max-md:flex max-md:flex-col-reverse max-sm:px-6"
      id="features"
    >
      <div className="flex flex-col gap-6">
        {features.map((feature) => {
          return (
            <div key={feature.id}>
              <h3 className="font-stix text-3xl font-semibold leading-normal">
                {feature.title}
              </h3>
              <p className="font-noto">{feature.description}</p>
            </div>
          );
        })}
      </div>
      <div>
        <Image
          src={featuresImg}
          alt="working man image"
          width={660}
          height={460}
          className="rotate-1 w-full"
        />
      </div>
    </div>
  );
}
