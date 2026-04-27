"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { ResumeCard } from "@/components/portfolio/resume-card";
import { Button } from "@/components/ui/button";

interface Talk {
  host: string;
  title: string;
  date: string;
  url?: string;
  logoUrl?: string;
}

interface TalksProps {
  talks: readonly Talk[];
  showAllText?: string;
}

const DEFAULT_DISPLAY_COUNT = 5;

export default function Talks({ talks, showAllText = "Show All" }: TalksProps) {
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 按日期从新到旧排序
  const sortedTalks = [...talks].sort((a, b) => {
    // 将 "YYYY.MM" 格式转换为可比较的字符串
    const dateA = a.date.replace(".", "");
    const dateB = b.date.replace(".", "");
    return dateB.localeCompare(dateA);
  });

  // 默认展示最新条目，展开后展示全部
  const displayedTalks = showAll
    ? sortedTalks
    : sortedTalks.slice(0, DEFAULT_DISPLAY_COUNT);
  const hasMoreTalks = sortedTalks.length > DEFAULT_DISPLAY_COUNT;

  // 挂载前不渲染动态内容，避免 hydration 不一致
  if (!mounted) {
    return (
      <div className="flex min-h-0 flex-col gap-y-3">
        {sortedTalks.slice(0, DEFAULT_DISPLAY_COUNT).map((talk) => (
          <ResumeCard
            key={talk.host + talk.date}
            href={talk.url}
            logoUrl={talk.logoUrl || ""}
            altText={talk.host}
            title={talk.host}
            subtitle={talk.title}
            period={talk.date}
            useMarkdown={true}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      {displayedTalks.map((talk) => (
        <ResumeCard
          key={talk.host + talk.date}
          href={talk.url}
          logoUrl={talk.logoUrl || ""}
          altText={talk.host}
          title={talk.host}
          subtitle={talk.title}
          period={talk.date}
          useMarkdown={true}
        />
      ))}
      {hasMoreTalks && !showAll && (
        <div className="flex justify-center pt-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2"
          >
            <ChevronDown className="h-4 w-4" />
            {showAllText}
          </Button>
        </div>
      )}
    </div>
  );
}
