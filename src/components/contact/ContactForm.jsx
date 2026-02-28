'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mohamed1.shamseldeen@gmail.com';

export function ContactForm() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success(t('contact.form.success.title'), {
        description: t('contact.form.success.description'),
      });
      reset();
    } else {
      toast.error(t('contact.form.error'));
    }
  };

  const isFormSubmitting = isSubmitting;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div>
        <Label htmlFor="name" className="text-[20px] font-medium text-[#141414]">
          {t('contact.form.name.label')}
        </Label>
        <Input
          id="name"
          {...register('name')}
          placeholder={t('contact.form.name.placeholder')}
          className={cn(
            'mt-2 h-16 rounded-lg border-[#eaeaea] text-[20px]',
            errors.name && 'border-destructive'
          )}
          disabled={isFormSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-[20px] font-medium text-[#141414]">
          {t('contact.form.email.label')}
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder={t('contact.form.email.placeholder')}
          className={cn(
            'mt-2 h-16 rounded-lg border-[#eaeaea] text-[20px]',
            errors.email && 'border-destructive'
          )}
          disabled={isFormSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="text-[20px] font-medium text-[#141414]">
          {t('contact.form.phone.label')}
        </Label>
        <div className="mt-2 flex gap-2">
          <span className="flex h-16 items-center rounded-lg border border-[#eaeaea] bg-muted px-4 text-[20px] text-muted-foreground">
            {t('contact.form.countryCode')}
          </span>
          <Input
            id="phone"
            type="tel"
            {...register('phone')}
            placeholder={t('contact.form.phone.placeholder')}
            className={cn(
              'h-16 flex-1 rounded-lg border-[#eaeaea] text-[20px]',
              errors.phone && 'border-destructive'
            )}
            disabled={isFormSubmitting}
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="service" className="text-[20px] font-medium text-[#141414]">
          {t('contact.form.service.label')}
        </Label>
        <select
          id="service"
          {...register('service')}
          className={cn(
            'mt-2 flex h-16 w-full rounded-lg border border-[#eaeaea] bg-background px-4 text-[20px] ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            errors.service && 'border-destructive'
          )}
          disabled={isFormSubmitting}
        >
          <option value="">{t('contact.form.service.placeholder')}</option>
          <option value="eia">Environmental Impact Assessment (EIA)</option>
          <option value="audit">Environmental Audit</option>
          <option value="permits">Environmental Licenses and Permits</option>
          <option value="waste">Waste Management (Mawan)</option>
          <option value="consultation">Environmental Consultation</option>
          <option value="other">Other</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-[20px] font-medium text-[#141414]">
          {t('contact.form.message.label')}
        </Label>
        <textarea
          id="message"
          {...register('message')}
          placeholder={t('contact.form.message.placeholder')}
          rows={4}
          className={cn(
            'mt-2 flex w-full rounded-lg border border-[#eaeaea] bg-background px-4 py-3 text-[20px] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            errors.message && 'border-destructive'
          )}
          disabled={isFormSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isFormSubmitting}
        className="h-16 w-full rounded-full bg-[#1b6936] px-8 text-[20px] font-medium text-white hover:bg-[#1b6936]/90"
      >
        {isFormSubmitting ? (
          <Loader2 className="h-6 w-6 animate-spin" />
        ) : (
          <>
            <span>{t('contact.form.submit')}</span>
            <ArrowLeft className="h-5 w-5 rtl:rotate-180" />
          </>
        )}
      </Button>
    </form>
  );
}
