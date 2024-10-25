import { IComponent } from "../models/interface";

const steps: IComponent[] = [
  {
    title: "Sign up",
    description: `Create an account to start using our task manager.`,
  },
  {
    title: "Create task",
    description: `Easily add tasks with titles, descriptions, due dates, and priorities.`,
  },
  {
    title: "Organize task",
    description: `Group tasks into categories or projects for better organization.`,
  },
  {
    title: "Track progress",
    description: `Monitor the status of your tasks, mark them as completed, and stay up to date.`,
  },
];

export default function StepsSection() {
  return (
    <div className="grid grid-cols-2 gap-12 px-16 max-w-normal mx-auto max-md:flex max-md:flex-col max-sm:px-6">
      <div className="relative">
        <div className="flex flex-col gap-6 sticky top-10">
          <h2 className="font-stix text-3xl font-semibold text-center">
            Discover the power of our product
          </h2>
          <p className="font-noto text-center">
            Our tool was designed with efficiency and simplicity in mind. Thanks to
            advanced functions and an intuitive interface, you can focus on achieving
            goals rather than organizing work. Simplify your tasks and enjoy better
            results.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8 relative">
        {steps.map((step, index) => {
          return (
            <div
              key={index}
              className="flex flex-col py-6 px-10 odd:bg-accent1 even:bg-accent2 gap-6 odd:rotate-2 even:-rotate-2 sticky top-10"
            >
              <div className="flex justify-between">
                <h4 className="font-stix text-2xl font-semibold">{step.title}</h4>
                <p className="font-stix text-2xl font-semibold">0{index + 1}</p>
              </div>
              <p className="font-noto text-center">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
