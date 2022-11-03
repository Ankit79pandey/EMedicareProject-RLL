package org.medicare.services;

import java.util.List;

import org.medicare.entity.ContactUs;

public interface ContactUsService {
void insertMsg(ContactUs contactUs);
List<ContactUs> getQueries();
}
