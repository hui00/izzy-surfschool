import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectOption } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from 'react-i18next';

const BookingForm = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    activity: "",
    participants: "1",
    specialRequests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const newBooking = {
        id: Date.now(),
        ...formData,
        status: "pending",
        createdAt: new Date().toISOString()
      };
      
      bookings.push(newBooking);
      localStorage.setItem("bookings", JSON.stringify(bookings));
      
      setIsSubmitting(false);
      toast({
        title: t('bookingForm.bookingConfirmed'),
        description: t('bookingForm.bookingConfirmedDesc'),
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        activity: "",
        participants: "1",
        specialRequests: ""
      });
      
      onClose();
    }, 1500);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{t('bookingForm.title')}</DialogTitle>
          <DialogDescription>
            {t('bookingForm.intro')}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('bookingForm.fullName')}</Label>
            <Input 
              id="name" 
              name="name" 
              placeholder={t('bookingForm.yourName')} 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('bookingForm.email')}</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder={t('bookingForm.yourEmail')} 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t('bookingForm.phone')}</Label>
              <Input 
                id="phone" 
                name="phone" 
                placeholder={t('bookingForm.yourPhone')} 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">{t('bookingForm.desiredDate')}</Label>
              <Input 
                id="date" 
                name="date" 
                type="date" 
                min={tomorrowFormatted}
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="participants">{t('bookingForm.participants')}</Label>
              <Select 
                id="participants" 
                name="participants" 
                value={formData.participants}
                onChange={handleChange}
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <SelectOption key={num} value={num.toString()}>
                    {num} {num === 1 ? t('bookingForm.person') : t('bookingForm.people')}
                  </SelectOption>
                ))}
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="activity">{t('bookingForm.activity')}</Label>
            <Select 
              id="activity" 
              name="activity" 
              value={formData.activity}
              onChange={handleChange}
              required
            >
              <SelectOption value="">{t('bookingForm.selectActivity')}</SelectOption>
              <SelectOption value="surf-debutant">{t('bookingForm.surfBeginner')}</SelectOption>
              <SelectOption value="surf-intermediaire">{t('bookingForm.surfIntermediate')}</SelectOption>
              <SelectOption value="surf-avance">{t('bookingForm.surfAdvanced')}</SelectOption>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="specialRequests">{t('bookingForm.specialRequests')}</Label>
            <Input 
              id="specialRequests" 
              name="specialRequests" 
              placeholder={t('bookingForm.additionalInfo')} 
              value={formData.specialRequests}
              onChange={handleChange}
            />
          </div>
          
          <DialogFooter className="mt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isSubmitting}
            >
              {t('bookingForm.cancel')}
            </Button>
            <Button 
              type="submit" 
              className="bg-gradient-ocean"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('bookingForm.processing') : t('bookingForm.confirmBooking')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
