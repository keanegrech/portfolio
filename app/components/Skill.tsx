import { IconType } from 'react-icons';

export interface SkillProps {
  title: string;
  icon: IconType;
}

export default function Skill({ title, icon: Icon }: SkillProps) {
  return (
    <div className="bg-[#e0e0e0] dark:bg-[#262626] p-4 rounded-[15px] flex justify-center">
      <Icon title={title} size={30} />
    </div>
  );
}
