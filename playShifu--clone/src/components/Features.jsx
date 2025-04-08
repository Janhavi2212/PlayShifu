import React from 'react';
import { Brain, Gamepad, Smartphone, Shield as Child } from 'lucide-react';

const Features = () => {
  return (
    <div className="container mx-auto px-4 my-12">
      <div className="bg-purple-700 text-white rounded-lg p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Brain className="w-6 h-6 text-purple-700" />
            </div>
            <div className="font-medium">STEM</div>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Gamepad className="w-6 h-6 text-purple-700" />
            </div>
            <div className="font-medium">Games</div>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Smartphone className="w-6 h-6 text-purple-700" />
            </div>
            <div className="font-medium">App-Enabled</div>
          </div>
          <div className="text-center">
            <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Child className="w-6 h-6 text-purple-700" />
            </div>
            <div className="font-medium">Ages 4-10</div>
          </div>
        </div>
        <p className="text-center text-sm mt-6">* Free in-app games with compatible tablets</p>
      </div>
    </div>
  );
};

export default Features;