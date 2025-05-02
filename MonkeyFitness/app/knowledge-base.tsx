import React, { useState } from 'react';

const exercises = [
  {
    title: 'Push Up',
    videoUrl: 'https://www.youtube.com/embed/0pkjOk0EiBs',
    instructions:
      'Start in a plank position, lower your body until your chest almost touches the floor, then push back up.',
  },
  {
    title: 'Squat',
    videoUrl: 'https://www.youtube.com/embed/UXJrBgI2VcM',
    instructions:
      'Stand with feet shoulder-width apart, lower your body by bending your knees, and return to standing.',
  },
  {
    title: 'Lunge',
    videoUrl: 'https://www.youtube.com/embed/QOVaH5EUX8E',
    instructions:
      'Step forward with one leg, lower your hips until both knees are bent at about a 90-degree angle, then return to standing.',
  },
  {
    title: 'Plank',
    videoUrl: 'https://www.youtube.com/embed/pSHjTRCQxIw',
    instructions:
      'Lie face down, then lift your body off the ground with your forearms and toes, keeping your body straight.',
  },
  {
    title: 'Burpee',
    videoUrl: 'https://www.youtube.com/embed/dZgVxmf6jkA',
    instructions:
      'Start standing, drop into a squat, kick your feet back into a plank, return to squat, and jump up.',
  },
  {
    title: 'Mountain Climber',
    videoUrl: 'https://www.youtube.com/embed/nmwgirgXLYM',
    instructions:
      'Start in a plank position, bring one knee towards your chest, then switch legs quickly.',
  },
  {
    title: 'Push Up',
    videoUrl: 'https://www.youtube.com/embed/0pkjOk0EiBs',
    instructions:
      'Start in a plank position, lower your body until your chest almost touches the floor, then push back up.',
  },
  {
    title: 'Squat',
    videoUrl: 'https://www.youtube.com/embed/UXJrBgI2VcM',
    instructions:
      'Stand with feet shoulder-width apart, lower your body by bending your knees, and return to standing.',
  },
  {
    title: 'Lunge',
    videoUrl: 'https://www.youtube.com/embed/QOVaH5EUX8E',
    instructions:
      'Step forward with one leg, lower your hips until both knees are bent at about a 90-degree angle, then return to standing.',
  },
  {
    title: 'Plank',
    videoUrl: 'https://www.youtube.com/embed/pSHjTRCQxIw',
    instructions:
      'Lie face down, then lift your body off the ground with your forearms and toes, keeping your body straight.',
  },
  {
    title: 'Burpee',
    videoUrl: 'https://www.youtube.com/embed/dZgVxmf6jkA',
    instructions:
      'Start standing, drop into a squat, kick your feet back into a plank, return to squat, and jump up.',
  },
  {
    title: 'Mountain Climber',
    videoUrl: 'https://www.youtube.com/embed/nmwgirgXLYM',
    instructions:
      'Start in a plank position, bring one knee towards your chest, then switch legs quickly.',
  },
  {
    title: 'Mountain Climber',
    videoUrl: 'https://www.youtube.com/embed/nmwgirgXLYM',
    instructions:
      'Start in a plank position, bring one knee towards your chest, then switch legs quickly.',
  },
];

const WorkoutKnowledgebase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExercises = exercises.filter((exercise) =>
    exercise.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Workout Knowledgebase</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a workout..."
          style={styles.input}
        />
        <button style={styles.searchButton}>Search</button>
      </div>
      <div style={styles.grid}>
        {filteredExercises.map((exercise) => (
          <div key={exercise.title} style={styles.card}>
            <h2 style={styles.cardTitle}>{exercise.title}</h2>
            <div style={styles.cardVideo}>
              <iframe
                src={exercise.videoUrl}
                title={`${exercise.title} exercise video`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
              />
            </div>
            <p style={styles.cardInstructions}>{exercise.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutKnowledgebase;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '1rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  searchContainer: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem',
    maxWidth: 600,
    marginInline: 'auto',
  },
  input: {
    flex: 1,
    padding: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: 4,
  },
  searchButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  cardVideo: {
    width: '100%',
    height: '180px',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: '0.5rem',
  },
  cardInstructions: {
    fontSize: '0.9rem',
    color: '#555',
  },
};
