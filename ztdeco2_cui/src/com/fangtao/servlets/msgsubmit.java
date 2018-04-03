package com.fangtao.servlets;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.QuerySendDetailsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.QuerySendDetailsResponse;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import com.fangtao.utility.*;

public class msgsubmit extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        System.out.println("post");

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        System.out.println("get");
        //request.setCharacterEncoding("utf-8");

        String name = request.getParameter("name");
                name= URLDecoder.decode(name,"utf-8");
        String number = request.getParameter("number");
        System.out.println(name+" "+number);
        sendSMS sendSMS = new sendSMS();
        try {
            sendSMS.sendSMS(name,number);
        } catch (ClientException e) {
            e.printStackTrace();
        }



        String url = "../index.html";
        response.sendRedirect(url);

    }







}
