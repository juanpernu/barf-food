export default function Steps({ steps }: { steps: any[] }) {
  return (
    <nav className="flex items-center justify-center" aria-label="Progress">
      <p className="text-sm font-medium">
        Paso {steps.findIndex((step) => step.status === "current") + 1} de{" "}
        {steps.length}
      </p>
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {steps.map((step) => (
          <li key={step.name}>
            {step.status === "complete" ? (
              <div className="block h-2.5 w-2.5 rounded-full bg-violet-500 hover:bg-violet-900">
                <span className="sr-only">{step.name}</span>
              </div>
            ) : step.status === "current" ? (
              <div
                className="relative flex items-center justify-center"
                aria-current="step"
              >
                <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
                  <span className="h-full w-full rounded-full bg-indigo-200" />
                </span>
                <span
                  className="relative block h-2.5 w-2.5 rounded-full bg-violet-600"
                  aria-hidden="true"
                />
                <span className="sr-only">{step.name}</span>
              </div>
            ) : (
              <div className="block h-2.5 w-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                <span className="sr-only">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
