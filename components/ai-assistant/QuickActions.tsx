"use client";

interface QuickActionsProps {
  actions: string[];
  onAction: (action: string) => void;
}

export function QuickActions({ actions, onAction }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {actions.map((action) => (
        <button
          key={action}
          onClick={() => onAction(action)}
          className="px-3 py-1.5 text-xs font-medium text-accent-orange border border-accent-orange rounded-full hover:bg-accent-orange hover:text-white transition-colors cursor-pointer"
        >
          {action}
        </button>
      ))}
    </div>
  );
}
