"use client";
import { Subtitle, Title } from "@/components/Typography";

export const ReviewsSection = () => {
  return (
    <section
      id="avaliacoes"
      className="w-full max-w-7xl m-auto px-4 overflow-x-hidden"
    >
      <Title className="text-white mb-2 mt-8">Avaliações</Title>
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div className="elfsight-app-939db9d4-e1be-417b-bcbe-4cb4a68a4019"></div>
    </section>
  );
};
