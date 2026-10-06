<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## App structure and conventions

- Keep the clinic site as file-based TanStack Start routes with shared visual chrome in `src/routes/__root.tsx` and feature sections in `src/components/site/`; this keeps each requested destination independently addressable and indexable.
- Store clinic identity, editable example contact details, service copy, team profiles, gallery, plans, and tips in `src/lib/clinic.ts`; this gives the owner one content source to update.
- Use semantic oklch design tokens and component utilities in `src/styles.css` for brand colors, typography, gradients, and shadows; page code should consume these shared tokens rather than hard-coded visual values.
- Appointment requests currently use a validated client form that prepares a `mailto:` message; keep this behavior transparent until a clinic email workflow or backend is configured.
