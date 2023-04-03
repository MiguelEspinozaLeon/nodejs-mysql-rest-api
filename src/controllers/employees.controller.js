import { pool } from "../db.js";



export const getEmployees = async (req, res) => {
    try{
        const [users] = await pool.query('SELECT * FROM employee;');
        res.send(users);

    }catch(error){
        return res.status(500).json({
            message: 'Error with the API.'
        })

    }
  
}

export const getEmployeeById =  async (req, res) => {

    try {
        const [users] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]);

        if(users.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        res.json(users[0]);
        
    } catch (error) {
        return res.status(500).json({
            message: 'Error with the API.'
        })
        
    }
   
}
export const createEmployees = async (req, res) => {
    const {name, salary} = req.body;

    try {
        const [rows] =   await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?) ', [name, salary]);
        res.send({
            id: rows.insertId,
            name,
            salary
        });
        
    } catch (error) {

        return res.status(500).json({
            message: 'Error with the API.'
        })
        
    }
   
}

export const updateEmployees = async (req, res) => {
    const {name, salary} = req.body
    try {
        
        const [user] = await pool.query('UPDATE employee SET name = IFNULL(?, name) , salary = IFNULL(?, salary) WHERE id = ?', [name, salary, req.params.id])
    
            if(user.affectedRows === 0) return res.status(404).json({
                message: 'Employee not found'
            })
            
            res.send({
                id: req.params.id, 
                name,
                salary
            })
        
    } catch (error) {
        return res.status(500).json({
            message: 'Error with the API.'
        })
    }
    
}
export const deleteEmployees =  async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        if(result.affectedRows == 0) return res.status(404).json({
            message: 'Employee not found.'
        })
        res.sendStatus(204);
        
    } catch (error) {
        return res.status(500).json({
            message: 'Error with the API.'
        })
        
    }
  
}
