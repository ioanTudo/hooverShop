import { ReviewsDisplay } from "./reviewsDisplay";
import { Reviews_content } from "../../data";

export const ReviewsPage = () => {
  return (
    <>
      {Reviews_content.map((content) => (
        <ReviewsDisplay
          title={content.title}
          content={content.content}
          finishingContent={content.finishingContent}
          key={content.id}
        />
      ))}
    </>
  );
};
