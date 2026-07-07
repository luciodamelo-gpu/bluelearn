-- Grants permissions to SELECT media as unauthenticated user
-- Grants permissions to INSERT media as an authenticated user

GRANT SELECT ON public.media_assets TO anon, authenticated;
GRANT INSERT ON public.media_assets TO authenticated;

GRANT SELECT ON public.revision_assets TO anon, authenticated;
GRANT INSERT ON public.revision_assets TO authenticated;
