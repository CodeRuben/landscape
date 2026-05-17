"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const SITE_CODE = process.env.NEXT_PUBLIC_GOATCOUNTER_SITE_CODE?.trim();

function buildPath(pathname: string, searchParams: URLSearchParams) {
  const q = searchParams.toString();
  return q ? `${pathname}?${q}` : pathname;
}

function GoatCounterTracked({ countEndpoint }: { countEndpoint: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded || !window.goatcounter?.count) return;
    window.goatcounter.count({ path: buildPath(pathname, searchParams) });
  }, [loaded, pathname, searchParams]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.goatcounter ||= {};
            window.goatcounter.no_onload = true;
          `,
        }}
      />
      <Script
        src="https://gc.zgo.at/count.js"
        strategy="afterInteractive"
        data-goatcounter={countEndpoint}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

export function GoatCounterAnalytics() {
  if (!SITE_CODE) return null;

  const countEndpoint = `https://${SITE_CODE}.goatcounter.com/count`;

  return (
    <Suspense fallback={null}>
      <GoatCounterTracked countEndpoint={countEndpoint} />
    </Suspense>
  );
}
