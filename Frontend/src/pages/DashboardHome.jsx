const DashboardHome = () => {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '2rem'
      }}>
        <h1 style={{
          color: '#2d3748',
          fontSize: '2.5rem',
          marginBottom: '1rem',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '0.5rem'
        }}>
          Welcome back! 👋
        </h1>
        
        <p style={{
          color: '#4a5568',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          It's great to see you again. Here's what's happening with your account today.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          <div style={{
            backgroundColor: '#f0f9ff',
            padding: '1.5rem',
            borderRadius: '8px',
            borderLeft: '4px solid #0369a1'
          }}>
            <h3 style={{ color: '#0369a1', marginTop: '0' }}>Recent Activity</h3>
            <p style={{ color: '#4b5563' }}>Check your latest notifications and updates</p>
          </div>
          
          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '1.5rem',
            borderRadius: '8px',
            borderLeft: '4px solid #16a34a'
          }}>
            <h3 style={{ color: '#16a34a', marginTop: '0' }}>Quick Actions</h3>
            <p style={{ color: '#4b5563' }}>Access frequently used features</p>
          </div>
          
          <div style={{
            backgroundColor: '#fef2f2',
            padding: '1.5rem',
            borderRadius: '8px',
            borderLeft: '4px solid #dc2626'
          }}>
            <h3 style={{ color: '#dc2626', marginTop: '0' }}>Pending Tasks</h3>
            <p style={{ color: '#4b5563' }}>Review items needing your attention</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome;