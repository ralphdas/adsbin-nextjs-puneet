export default function CircleItem({
  icon,
  value,
  name
}: {
  icon: string | React.ReactNode;
  value: string | TrustedHTML;
  name: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 group cursor-pointer">
      <div className="w-6 h-6 text-3xl transition-all text-adsbin-evergreens tracking-tight border-4 border-adsbin-grey-100 rounded-full flex group-hover:border-adsbin-green-500">
        <span
          className="m-auto sub"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
      <p className="flex items-center justify-center text-adsbin-grey-1000 gap-1.5">
        {name} {icon}
      </p>
    </div>
  );
}
