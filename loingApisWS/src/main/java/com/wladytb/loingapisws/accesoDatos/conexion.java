/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.wladytb.loingapisws.accesoDatos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author wladi
 */
public class conexion {

//    private String username = "postgres";
//    private String pass = "040599";
//    private String classname = "org.postgresql.Driver";
//    private String url = "jdbc:postgresql://localhost:5432/4mosqueteros";
    private String username = "zbrndzhvgllonn";
    private String pass = "8319083ae356a0ce0fef52ac037a2676d6fb5b4752c94ba5078612aadc97301f";
    private String classname = "org.postgresql.Driver";
    private String url = "jdbc:postgresql://ec2-23-23-164-251.compute-1.amazonaws.com:5432/d9llr5um2kch3m";
    private Connection conn;

    public conexion() {
        try {
            Class.forName(classname);
            conn = DriverManager.getConnection(url, username, pass);
            System.out.println("conectadp");
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    public Connection getConexion() {
        return this.conn;
    }

    public void closeconexion() throws SQLException {
        conn.close();
    }
}
