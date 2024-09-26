import React from "react";

const page = () => {
  return (
    <div>
      <div className="font-sans bg-gray-100 px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="text-left">
            <h2 className="text-gray-800 text-3xl font-bold mb-6">
              Discover the Future of Innovation
            </h2>
            <p className="mb-4 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper
              mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis
              in bibendum tincidunt.
            </p>
            <p className="mb-4 text-sm text-gray-500">
              Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel
              tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce
              vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.
            </p>
            <p className="text-sm text-gray-500">
              consectetur adipiscing elit. Duis accumsan, nunc et tempus
              blandit, metus mi consectetur felis turpis vitae ligula. nunc et
              tempus blandit, metus mi consectetur felis turpis vitae ligula.
            </p>
            <p className="text-sm text-gray-500">
              consectetur adipiscing elit. Duis accumsan, nunc et tempus
              blandit, metus mi consectetur felis turpis vitae ligula. nunc et
              tempus blandit, metus mi consectetur felis turpis vitae ligula.
            </p>
          </div>
          <div>
            <img
              src="/photos/photo1.jpg"
              alt="Placeholder Image"
              className="rounded-lg object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
