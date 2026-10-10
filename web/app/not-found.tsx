import { Action, PageIntro } from "@/components/nonprofit/common";
export default function NotFound() {
  return (
    <>
      <PageIntro
        eyebrow="404 / Page not found"
        title="Let’s find your way back."
        description="This address may have changed. Explore the foundation’s giving or return to the homepage."
      />
      <div className="wrap button-row" style={{ paddingBottom: 100 }}>
        <Action href="/">Return home</Action>
        <Action href="/work/" secondary>
          Explore our giving
        </Action>
      </div>
    </>
  );
}
