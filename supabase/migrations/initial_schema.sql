-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  organization TEXT,
  role TEXT CHECK (role IN ('student', 'researcher', 'industry', 'admin')),
  avatar_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create XR modules table (marketplace)
CREATE TABLE IF NOT EXISTS public.xr_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) DEFAULT 0.00,
  category TEXT,
  thumbnail_url TEXT,
  content_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on xr_modules
ALTER TABLE public.xr_modules ENABLE ROW LEVEL SECURITY;

-- Create research projects table
CREATE TABLE IF NOT EXISTS public.research_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  funding_goal DECIMAL(12, 2),
  current_funding DECIMAL(12, 2) DEFAULT 0.00,
  status TEXT CHECK (status IN ('active', 'completed', 'proposed')),
  lead_researcher_id UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on research_projects
ALTER TABLE public.research_projects ENABLE ROW LEVEL SECURITY;

-- Create user progress table
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  module_id UUID REFERENCES public.xr_modules(id) ON DELETE CASCADE,
  progress_percentage INTEGER DEFAULT 0,
  last_accessed TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, module_id)
);

-- Enable RLS on user_progress
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Create site content table for dynamic sections
CREATE TABLE IF NOT EXISTS public.site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_type TEXT NOT NULL, -- 'pillar', 'revenue_stream', 'architecture_layer'
  title TEXT NOT NULL,
  content TEXT,
  icon TEXT,
  color TEXT,
  "order" INTEGER DEFAULT 0,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on site_content
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Set up RLS Policies (Basic examples)
-- Profiles: Users can only view/update their own profile
CREATE POLICY "Public profiles are viewable by everyone." ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile." ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile." ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- XR Modules: Publicly viewable
CREATE POLICY "XR modules are viewable by everyone." ON public.xr_modules
  FOR SELECT USING (true);

-- Research Projects: Publicly viewable
CREATE POLICY "Research projects are viewable by everyone." ON public.research_projects
  FOR SELECT USING (true);

-- Site Content: Publicly viewable
CREATE POLICY "Site content is viewable by everyone." ON public.site_content
  FOR SELECT USING (true);
