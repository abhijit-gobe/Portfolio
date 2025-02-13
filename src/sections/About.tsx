import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader title="A Glimpse Into My World" eyebrow="About me" description="Learn more about who I am, what I do and what inspires me." />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
          </div>
        </Card>
      </div>
    </div>
  )
};
