import { ITestimonials } from "../models/interface";

const opinions: ITestimonials[] = [
  {
    userName: "Alice Johnson",
    userJob: "Marketing Manager",
    description: `I've tried many task managers, but this one is by far the best! It's intuitive, easy to use, and has all the features I need to stay organized.`,
  },
  {
    userName: "John Smith",
    userJob: "Freelancer",
    description: `I love how I can access my tasks from anywhere, whether I'm on my computer or phone. It has greatly improved my productivity.`,
  },
  {
    userName: "Emily Davis",
    userJob: "Software Developer",
    description: `The task manager has helped me prioritize my work effectively. I no longer miss deadlines and can track my progress easily.`,
  },
  {
    userName: "Michael Brown",
    userJob: "Project Manager",
    description: `I recommend this task manager to anyone looking to streamline their tasks and boost their efficiency. It's a game-changer!`,
  },
];

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="flex flex-col gap-10 max-w-normal px-16 pt-20 mx-auto max-sm:px-6"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-stix text-3xl font-semibold">Testimonials</h2>
        <p className="font-noto text-center">
          See what our users have to say about our task manager.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-sm:gap-8">
        {opinions.map((opinion, index) => {
          return (
            <div key={index} className="relative opinions-container">
              <div className="absolute w-full h-full bg-accent2 top-0 left-0 z-10 opinion-bg"></div>
              <div className="flex flex-col gap-4 relative w-full h-full bg-accent1 px-10 py-6 z-20 opinion-item">
                <div className="flex flex-col">
                  <p className="font-noto text-lg font-semibold">{opinion.userName}</p>
                  <span className="font-noto">{opinion.userJob}</span>
                </div>
                <p className="font-noto">{opinion.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
