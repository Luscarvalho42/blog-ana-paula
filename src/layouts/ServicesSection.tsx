import { Paragraph, Subtitle, Title } from "@/components/Typography";
import { GetServices } from "@/services/ServicesService";

export const ServicesSection = async () => {
  /* <section className="w-screen max-w-7xl px-4 m-auto mt-16"> */
  const { services } = await GetServices();
  console.log(services);

  const servicesCards = (): JSX.Element => {
    return (
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ name, icon, description }, index) => (
          <div id={name} className="sm:rounded-xl  sm:bg-stone-100 sm:p-4">
            <hr className={index === 0 ? "hidden" : "" + " my-4 sm:hidden"} />
            <div className="flex items-center sm:justify-center gap-4 mb-4">
              <img className="h-7 w-auto" src={icon.url} alt={icon.fileName} />
              <Subtitle>{name}</Subtitle>
            </div>
            <Paragraph className="sm:text-center font-thin">
              {description}
            </Paragraph>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="w-screen max-w-7xl m-auto px-4">
      <div className="w-full rounded-b-xl bg-white p-8 shadow-2xl">
        <Title className="text-center mb-4">Serviços</Title>
        {servicesCards()}
      </div>
    </section>
  );
};
