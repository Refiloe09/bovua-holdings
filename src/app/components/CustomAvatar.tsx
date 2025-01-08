"use client";
import React, { useState, useEffect } from "react";
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";

interface AvatarProps {
  name: string;
  title: string;
}

export default function CustomAvatar({ name, title }: AvatarProps) {
    const [avatar, setAvatar] = useState<string>("");
  
    useEffect(() => {
      const generatedAvatar = createAvatar(initials, { seed: name,  }).toString();
      setAvatar(generatedAvatar);
    }, [name]);
  
    return (
      <div className="flex items-center mt-8 space-x-3">
        {avatar && (
          <div
            className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14"
            dangerouslySetInnerHTML={{ __html: avatar }}
          ></div>
        )}
        <div>
          <div className="text-lg font-medium">{name}</div>
          <div className="text-gray-600 dark:text-gray-400">{title}</div>
        </div>
      </div>
    );
  }
