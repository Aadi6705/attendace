const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const studentRoutes = require('./routes/studentRoutes');
app.use('/api/student', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
