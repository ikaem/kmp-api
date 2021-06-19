import Router from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json('Welcome to kmp-api v0.01');
});

router.get('/users', async (req, res) => {
  // TODO move this to controller

  res.send({
    data: [{ id: '123', firstName: 'Karlo', email: 'karlo@karlo.com' }],
  });
});

export default router;
