-- Tabla de perfiles de usuario
CREATE TABLE users_profiles (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    name TEXT NOT NULL,
    business_name TEXT,
    industry TEXT,
    level TEXT CHECK (level IN ('principiante', 'intermedio', 'avanzado')),
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de cursos
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT,
    level TEXT CHECK (level IN ('principiante', 'intermedio', 'avanzado')),
    duration_hours INT,
    thumbnail_url TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de lecciones
CREATE TABLE lessons (
    id SERIAL PRIMARY KEY,
    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content_text TEXT,
    video_url TEXT,
    order_index INT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Tabla de inscripciones
CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    course_id INT REFERENCES courses(id) ON DELETE CASCADE,
    enrolled_at TIMESTAMP DEFAULT NOW(),
    completed BOOL DEFAULT FALSE
);

-- Políticas de Row Level Security (RLS)
ALTER TABLE users_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow individual access" ON users_profiles
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Allow individual modification" ON users_profiles
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Allow access to courses" ON courses
    FOR SELECT USING (true);

CREATE POLICY "Allow access to lessons" ON lessons
    FOR SELECT USING (true);

CREATE POLICY "Allow individual access" ON enrollments
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Allow individual modification" ON enrollments
    FOR ALL USING (auth.uid() = user_id);