import { ToolGrid } from './ToolGrid';
import { FeaturedSection } from './FeaturedSection';
import { CommunitySection } from './CommunitySection';

export function MainContent() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Turn Every Product into a Work of Art</h1>
            <p className="mt-2 text-gray-400">Create eye-catching product images that stand out in every marketplace.</p>
          </div>
          <ToolGrid />
          <FeaturedSection />
          <CommunitySection />
        </div>
      </div>
    </div>
  );
}