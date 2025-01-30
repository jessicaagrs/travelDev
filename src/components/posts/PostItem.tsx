import Image from 'next/image';

type PostItemProps = {
  source: string;
  title: string;
  description: string;
};

export const PostItem = ({ source, title, description }: PostItemProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[400px] bg-custom1090 rounded-lg">
      <div>
        <Image
          src={source}
          alt={title}
          width={400}
          height={200}
          className="rounded-t-lg"
        />
      </div>
      <span className="pl-3 text-custom100 font-medium">{title}</span>
      <p className="px-3 pb-3">{description}</p>
    </div>
  );
};
